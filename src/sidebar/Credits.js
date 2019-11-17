import React from 'react';
import './credits.css';
import Elf from '../assets/elf.png';
import Bubble from '../assets/flippedBubblePS.png';
import Tree from '../assets/christmas-tree.png';
import Add from '../assets/addCredit.png';

const Credits = () => {
    return(
        <div>
            <h2>Credits</h2>
            <h4 id="h4Text">Thank you to the amazing artists who created the fun icons and graphics!</h4>
            <img src={Elf} id="creditElf"/>
            <p id="creditElfText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="www.flaticon.com" target="_blank">Flaticon</a>.</p>
            <img src={Bubble} id="creditBubble"/>
            <p id="creditBubbleText">Icon made by <a href="https://www.flaticon.com/authors/dave-gandy" target="_blank">Dave Gandy</a>  from <a href="www.flaticon.com" target="_blank">Flaticon</a>.</p>
            <img src={Tree} id="creditTree"/>
            <p id="creditElfText">Icon made by <a href="https://www.flaticon.com/authors/freepik" target="_blank">Freepik</a>  from <a href="www.flaticon.com" target="_blank">Flaticon</a>.</p>
            <img src={Add} id="creditAdd"/>
            <p id="creditElfText">Icon made by <a href="https://www.flaticon.com/authors/smashicons" target="_blank">Smashicons</a>  from <a href="www.flaticon.com" target="_blank">Flaticon</a>.</p>
        </div>
    )
}
export default Credits;