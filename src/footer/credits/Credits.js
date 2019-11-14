import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Elf from '../../assets/elf.png';
import Add from '../../assets/add.png';
import BubbleText from '../../assets/bubbleText.png';
import Tree from '../../assets/christmas-tree.png';



const Credits = () => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return(
        <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Credits</ModalHeader>
          <ModalBody>
          This project would not have been possible without the use of images made by awesome artists. Thanks for these wonderful images that really brought my project some life!
            {Elf}
            {BubbleText}
            {Tree}
            {Add}
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
};

export default Credits;