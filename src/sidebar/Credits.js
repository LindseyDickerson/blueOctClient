import React from 'react';
import './credits.css';
import Elf from '../assets/elf.png';
import Bubble from '../assets/flippedBubblePS.png';
import Tree from '../assets/christmas-tree.png';
import Add from '../assets/add.png';

const Credits = () => {
    return(
        <div id="creditDiv">
            <h1 id="credith1">Credits</h1>
            <h3 id="h4Text">Thank you to the amazing artists who created the fun icons and graphics!</h3>
            <div id="divCreditElf">
                <img src={Elf} id="creditElf"/>
                <p id="creditElfText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditBubble">
                <img src={Bubble} id="creditBubble"/>
                <p id="creditBubbleText">Icon made by <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditTree">
                <img src={Tree} id="creditTree"/>
                <p id="creditTreeText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
            <div id="divCreditAdd">
                <img src={Add} id="creditAdd"/>
                <p id="creditAddText">Icon made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank">Smashicons</a>  from <a href="http://www.flaticon.com" target="_blank">Flaticon</a>.</p>
            </div>
        </div>
    )
}
export default Credits;