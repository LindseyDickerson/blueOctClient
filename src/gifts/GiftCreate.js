import React, {useState} from 'react';
import {Card, CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from 'reactstrap';
import Add from '../assets/add.png';
import './giftCreate.css';
//import APIURL from '../helpers/environment'
//import PropTypes from 'prop-types';
import SnowStorm from 'react-snowstorm';

const GiftCreate = (props) => {
    const [gift, setGift] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [giftItem, setGiftItem] = useState('');
    const [cost, setCost] = useState('');
    const [storagePlace, setStoragePlace] = useState('');
    const [purchaseAt, setPurchaseAt] = useState('');
    const [wrappedIn, setWrappedIn] = useState('');
    const [delivered, setDelivered] = useState('');
    const [modal, setModal] = useState(false); //for modal
    const [dropdownOpen, setOpen] = useState(false); //for dropdown button
    const [closeAll, setCloseAll] = useState(false); // for modal
    //const [visible, setVisible] = useState(true); //for Alert
    
    // Modal toggle
    const toggle = () => setModal(!modal);
    const closeModal = () => setCloseAll(true);

    //const toggledropdown = () => setOpen(!dropdownOpen);
    //Need this for the ModalHeader
    const {
        buttonLabel,
        className
    } = props;

   
   

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/api/gift/wrap', {
            method: 'POST',
            body: JSON.stringify({gift: {recipient: recipient, giftItem: giftItem, cost: cost, storagePlace: storagePlace, purchaseAt: purchaseAt, wrappedIn: wrappedIn, delivered: delivered}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((gift) => {
            //console.log('hello');
            setRecipient('');
            setGiftItem('');
            setCost('');
            setStoragePlace('');
            setPurchaseAt('');
            setWrappedIn('');
            setDelivered('');
            props.fetchGift();
        })
        
    }

    return(
        <div id="divCreate">
            <Card tag="a" src={Add} id="createCard" onClick={toggle} style={{ cursor: "pointer" }} >
                <CardImg id="addImg" src={Add} alt="add image icon"/>
            </Card>
            <Modal id="addModal" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className={className} id="modalHeader">Add a Gift</ModalHeader>
                <ModalBody id="modalBody">
                <Form onSubmit={handleSubmit} id="formBody">
                        <FormGroup>
                            <Label htmlFor="recipient">Recipient:</Label>
                            <Input name="recipient" id="recInput" value={recipient} onChange={(e) => setRecipient(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="giftItem">Gift:</Label>
                            <Input name="giftItem" id="giftInput" value={giftItem} onChange={(e) => setGiftItem(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="cost">Cost:</Label>
                            <Input name="cost" id="costInput" value={cost} onChange={(e) => setCost(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="storagePlace">I'm storing it in:</Label>
                            <Input name="storagePlace" id="storageInput" value={storagePlace} onChange={(e) => setStoragePlace(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="purchaseAt">Purchase Location:</Label>
                            <Input name="purchaseAt" id="buyInput" value={purchaseAt} onChange={(e) => setPurchaseAt(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="wrappedIn">Wrapping Paper Used:</Label>
                            <Input name="wrappedIn" id="wrapInput" value={wrappedIn} onChange={(e) => setWrappedIn(e.target.value)}/> 
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="delivered">Has it Been Delivered?</Label>
                            <Input name="delivered" id="delvInput" value={delivered} onChange={(e) => setDelivered(e.target.value)}/> 
                        </FormGroup>
                        <Button id="formSave" type="submit" onClick={toggle}>Save</Button>
                        <SnowStorm/>
                        </Form>
                </ModalBody>
            </Modal>
        </div>
    );    
}
export default GiftCreate;