import React from 'react';
import { Button } from 'reactstrap';
import './Navbar.css';
import Elf from '../assets/elf.png';
import Gatsby from '../navbar/Gatsby/Gatsby';
import Comment from '../assets/flippedBubble.png';



const Navbar = (props) => {

    // const clearToken = () => {
    //     localStorage.clear(props.token);
        
    // }

   return (
        <div id="navDiv">
            <nav id="navBar">
                <img id="elf" src={Elf} alt="cartoon elf"></img>
                <div class="bubble">
                   <img id="commentBubble" src={Comment} alt="cartoon speech bubble"/>
                   <p id="click">Click</p>
                   <p id="the">the</p>
                   <p id="treeText">tree!</p>
                </div>
                <div id="treeDiv">
                    <Gatsby id="tree"/>
                </div>
                <h1 id="title" >Gifting with Gatsby</h1>
                <Button type="button" onClick={props.clearToken} id='logout' >Logout</Button>
                {/* commenting this out, was right after the button, seeing ifthis changes anything{' '} */}
            </nav>
        </div>
    );
};
export default Navbar;