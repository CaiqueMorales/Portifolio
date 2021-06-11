import React from 'react';
import './style.css';

const Sobre = () => {
    return(

        <div id="sobre">

            <div className="sobre_conteudo">
                <h1>Sobre mim</h1>
                <p>Meu nome é Caique Morales Silva e sou apaixonado por desenvolvimento WEB com foco no Front-End. Sempre procuro adquirir mais conhecimento, e reforçar tecnologias já aprendidas.</p>
                <p>Se tiver algum projeto em mente, oferta de emprego ou até mesmo apenas ter uma conversa, sinta-se livre para me contatar.</p>
            </div>
            <div className="sobre_conteudo">
                <h1>Habilidades</h1>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/html/caique-55">HTML</a>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/css/caique-55">CSS</a>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/caique-55">JAVASCRIPT</a>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/react/caique-55">REACT</a>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/react-native/caique-55">REACT NATIVE</a>
                <a href="https://www.devmedia.com.br/certificado/tecnologia/python/caique-55">PYTHON</a>
            </div>

        </div>

    );
}

export default Sobre;