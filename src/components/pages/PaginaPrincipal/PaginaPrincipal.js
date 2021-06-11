import React from 'react';
import NavBar from '../../NavBar';
import Home from '../../Home';
import Sobre from '../../Sobre';
import Projetos from '../../Projetos';
import Contato from '../../Contato';
import Footer from '../../Footer';

const PaginaPrincipal = () => {
    return(

        <div>

            <NavBar />
            <Home />
            <Sobre />
            <Projetos />
            <Contato />
            <Footer />

        </div>

    );
}

export default PaginaPrincipal