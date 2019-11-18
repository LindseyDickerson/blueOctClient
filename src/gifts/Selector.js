import React, {useState} from 'react';
import GiftCard from '../gifts/GiftCard';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './selector.css';

const Selector = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [sortRecipient, setSortRecipient] = useState([]);
    
    const toggle = () => setDropdownOpen(prevState => !prevState);
    // this const is for the dropdown.

    const sortGift = (recipient) => {
      fetch(`http://localhost:3001/api/gift/all/${recipient}`, {
        method: 'GET',
        // body: JSON.stringify({gift: {recipient: sortRecipient}}),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      })//.then(() => {props.fetchGift()})
    }

     const recMapper = () => {
       return props.recipient.map(() => {
        //  return(
          
        //  )
       });
     };

    return(
        <div>
          
          <Dropdown id="selectorDropdown" isOpen={dropdownOpen} toggle={toggle} >
            {/* commenting out key={recipient} it should go in above right after toggle */}
          <DropdownToggle id="dropdownToggle" caret>Sort</DropdownToggle>
          <DropdownMenu id="dropdownMenu">
            <DropdownItem id="dropdownItem">{sortGift()}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
    );
};
export default Selector;