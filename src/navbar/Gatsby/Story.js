import React from 'react';
import Elf from '../../assets/elf.png';
import './story.css'

const Story = () => {

    

    return(
        <div id="main">
        <img tag="a" src={Elf} id="elfStory" style={{ cursor: "pointer"}}></img>
        <h1>Gatsby's Story</h1>
        <div id="textStoryDiv">
            <p id="pTagStory">Hi! My name is Gatsby, the Gifting Elf! </p>
        </div>
        
        </div>
    );
};
export default Story;