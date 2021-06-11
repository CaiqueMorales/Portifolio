import React from 'react';
import './style.css';
import Ricon from '../../assets/react.png';
import Hicon from '../../assets/html.png';
import Cicon from '../../assets/css.png';
import Jicon from '../../assets/javascript.png';
import {AiFillCaretDown} from "react-icons/ai"

const Home = () => {
    return(

        <div id="home">

            <div className="home_content">
                <p>Olá,</p>
                <p>Me chamo Caique Morales Silva</p>
                <p>E sou Desenvoledor WEB.</p>
            </div>
            <div id="sumir">

                    <img src={Ricon} alt="react" className="icons"/>
                    <img src={Hicon} alt="html" className="icons"/>
                    <img src={Cicon} alt="css" className="icons"/>
                    <img src={Jicon} alt="javascript" className="icons"/>

            </div>

            <a href="#sobre" className="btn">
                <p>Avançar</p>
                <p><AiFillCaretDown /></p>
            </a>

        </div>

        

    );
}

export default Home