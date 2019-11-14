import React, {useState} from 'react';
import {  Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import APIURL from '../helpers/environment';

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

    const toggle = () => {
        setModal(!modal);
    }

    return(
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit a Gift</ModalHeader>
                <ModalBody>
                 <Form onSubmit={giftUpdate} toggle={toggle}>
                    <FormGroup toggle={toggle}>
                        <Label htmlFor="recipient">Edit Recipient:</Label>
                        <Input name="recipient" value={editRecipient} onChange={(e) => setEditRecipient(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="giftItem">Edit Gift:</Label>
                        <Input name="giftItem" value={editGiftItem} onChange={(e) => setEditGiftItem(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cost">Edit Cost:</Label>
                        <Input name="cost" value={editCost} onChange={(e) => setEditCost(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="storagePlace">I'm now storing it in:</Label>
                        <Input name="storagePlace" value={editStoragePlace} onChange={(e) => setEditStoragePlace(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="purchaseAt">Updated Purchase Location:</Label>
                        <Input name="purchaseAt" value={editPurchaseAt} onChange={(e) => setEditPurchaseAt(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="wrappedIn">Updated Wrapping Paper Used:</Label>
                        <Input name="wrappedIn" value={editWrappedIn} onChange={(e) => setEditWrappedIn(e.target.value)}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="delivered">Has it Been Delivered?</Label>
                        <Input name="delivered" value={editDelivered} onChange={(e) => setEditDelivered(e.target.value)}/> 
                    </FormGroup>
                    <Button type="submit" toggle={toggle}>Update Gift</Button>
                </Form>
            </ModalBody>
        </Modal>

    )
}
export default GiftEdit;