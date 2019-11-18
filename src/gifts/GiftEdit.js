import React, {useState} from 'react';
import {  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import APIURL from '../helpers/environment';
import './giftEdit.css';

const GiftEdit = (props, gift) => {

    
    const [recipient] = useState('');
    const [giftItem] = useState('');
    const [cost] = useState('');
    const [storagePlace] = useState('');
    const [purchaseAt] = useState('');
    const [wrappedIn] = useState('');
    const [delivered] = useState('');
    const [editRecipient , setEditRecipient ] = useState(props.giftToUpdate.recipient);
    const [editGiftItem , setEditGiftItem ] = useState(props.giftToUpdate.giftItem);
    const [editCost , setEditCost ] = useState(props.giftToUpdate.cost);
    const [editStoragePlace , setEditStoragePlace ] = useState(props.giftToUpdate.storagePlace);
    const [editPurchaseAt , setEditPurchaseAt ] = useState(props.giftToUpdate.purchaseAt);
    const [editWrappedIn , setEditWrappedIn ] = useState(props.giftToUpdate.wrappedIn);
    const [editDelivered , setEditDelivered ] = useState(props.giftToUpdate.delivered);
    
    const [modal, setModal] = useState(false);

    const giftUpdate = (event, gift) => {
        event.preventDefault();
        fetch(`${APIURL}/api/gift/${props.giftToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({gift: {recipient: editRecipient, giftItem: editGiftItem, cost: editCost, storagePlace: editStoragePlace, purchaseAt: editPurchaseAt, wrappedIn: editWrappedIn, delivered: editDelivered}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchGift();
            props.updateOff();
        })
    }

    const {
        buttonLabel,
        className
    } = props;

    const toggle = () => {
        setModal(!modal);
    }

    return(
        <Modal id="editModal" isOpen={toggle} toggle={toggle} className={className}>
            <ModalHeader id="modalheader" >Edit a Gift</ModalHeader>
                <ModalBody id="editModalBody">
                 <Form id="editForm" onSubmit={giftUpdate} toggle={toggle}>
                    <FormGroup toggle={toggle}>
                        <Label htmlFor="recipient">Edit Recipient:</Label>
                        <Input id="input" name="recipient" value={editRecipient} onChange={(e) => setEditRecipient(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="giftItem">Edit Gift:</Label>
                        <Input id="input" name="giftItem" value={editGiftItem} onChange={(e) => setEditGiftItem(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cost">Edit Cost:</Label>
                        <Input id="input" name="cost" value={editCost} onChange={(e) => setEditCost(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="storagePlace">I'm now storing it in:</Label>
                        <Input id="input" name="storagePlace" value={editStoragePlace} onChange={(e) => setEditStoragePlace(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="purchaseAt">Updated Purchase Location:</Label>
                        <Input id="input" name="purchaseAt" value={editPurchaseAt} onChange={(e) => setEditPurchaseAt(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="wrappedIn">Updated Wrapping Paper Used:</Label>
                        <Input id="input" name="wrappedIn" value={editWrappedIn} onChange={(e) => setEditWrappedIn(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="delivered">Has it Been Delivered?</Label>
                        <Input id="input" name="delivered" value={editDelivered} onChange={(e) => setEditDelivered(e.target.value)}/> 
                    </FormGroup>
                    <Button id="editModalButton" type="submit" toggle={toggle}>Update Gift</Button>
                    <Button id="closeEditModal" toggle={toggle}>Close Without Updating</Button>
            </Form>
            </ModalBody>
        </Modal>

    )
}
export default GiftEdit;