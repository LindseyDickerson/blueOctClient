import React, {useState} from 'react';
import GiftCard from '../gifts/GiftCard';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './selector.css';

const Selector = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [recipient] = useState('');
    const [sortRecipient, setSortRecipient] = useState();
    //useState(props.gift.recipient)
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const sortGift = (gifts) => {
      fetch(`http://localhost:3001/api/gift/all/${gifts.sortRecipient}`, {
        method: 'GET',
        body: JSON.stringify({gift: {recipient: sortRecipient}}),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      })//.then(() => {props.fetchGift()})
    }

    //  const recMapper = () => {
    //    return props.recipient.map(() => {
    //      return(
    //       <Dropdown id="selectorDropdown" isOpen={dropdownOpen} toggle={toggle} key={recipient}>
    //       <DropdownToggle id="dropdownToggle" caret>Sort</DropdownToggle>
    //       <DropdownMenu id="dropdownMenu">
    //         <DropdownItem id="dropdownItem">{sortGift(recipient)}</DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown>
    //      )
    //    });
    //  };

    return(
        <div>
          {/* {recMapper()} */}
          <Dropdown id="selectorDropdown" isOpen={dropdownOpen} toggle={toggle} >
            {/* commenting out key={recipient} it should go in above right after toggle */}
          <DropdownToggle id="dropdownToggle" caret>Sort</DropdownToggle>
          <DropdownMenu id="dropdownMenu">
            {/* <DropdownItem id="dropdownItem">{sortGift()}</DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        </div>
    );
};
export default Selector;