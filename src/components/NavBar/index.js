import React, { useState } from 'react';
import './style.css'

const NavBar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return(

        <nav>

            <div>
                <a href="#home" id="logo">CM</a>
            </div>
            <ul className={click ? "nav_menu active" : "nav_menu"}>
                <li className="nav_item"><a href="#home" onClick={handleClick}>Home</a></li>
                <li className="nav_item"><a href="#sobre" onClick={handleClick}>Sobre</a></li>
                <li className="nav_item"><a href="#projetos" onClick={handleClick}>Projetos</a></li>
                <li className="nav_item"><a href="#contato" onClick={handleClick}>Contato</a></li>
            </ul>
    

            <div onClick={handleClick} className="nav_icon">
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

        </nav>

    );
}

export default NavBar;