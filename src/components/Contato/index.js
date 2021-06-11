import React from 'react';
import Contact from '../../assets/contact.png'
import './style.css';

const Contato = () => {
    return(

        <div id="contato">

            <div id="sumir"><img src={Contact} alt="Contato" className="contato_img"/></div>
            <div id="contato_conteudo">
                <div>
                    <h1>Telefone:</h1>
                    <p>11 96193-0889</p>
                </div>
                <div>
                    <h1>Email:</h1>
                    <p>aecaique@gmail.com</p>
                </div>
                <div className="container_icon">
                    <a href="https://wa.me/5511961930889" className="contato_icon"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/caique_brad/" className="contato_icon"><i class="fab fa-instagram"></i></a>
                </div>
                
            </div>


        </div>

    );
}

export default Contato;