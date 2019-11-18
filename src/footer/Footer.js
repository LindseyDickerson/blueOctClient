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
            {/* <hr id="footerBar"/> */}
            <Row>
                <div id="footerSidebar"></div>
                <p id='closingTextName'>©Lindsey Dickerson 2019</p>
                <br/>
                <p id='closingTextSchool'>Eleven Fifty Academy Blue Badge Project</p>
            </Row>
        </footer>
    );
};

export default Footer;