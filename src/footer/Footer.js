import React, {useState} from 'react';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import './footer.css';


const Footer = (props) => {

    // const {
    //     buttonLabel,
    //     className
    //   } = props;
    
    //   const [modal, setModal] = useState(false);
    
    //   const toggle = () => setModal(!modal);

    return (
        <footer>
            <hr id="footerBar"/>
            <Row>
                <div id="footerSidebar"></div>
                <p id='closingText'>©Lindsey Dickerson 2019</p>
                <br/>
                {/* <div>
                 <Button color="danger" onClick={toggle}>Credits</Button>
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
                        {/* <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                  </Modal>
                </div> */} */}
                <p id='closingText'>Eleven Fifty Academy Blue Badge Project</p>
            </Row>
        </footer>
    );
};

export default Footer;