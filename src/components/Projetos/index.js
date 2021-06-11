import React from 'react';
import Calc from '../../assets/calc_img.png'
import Imc from '../../assets/imc_img.png'
import './style.css';

const Projetos = () => {
    return(

        <div id="projetos">

            <div id="big_p_container">
                <div className="p_titulo">
                    <h1>Projetos</h1>
                </div>

                <div className="p_container">
                    <div className="p_semi_container c_1">
                
                        <a href="https://festive-montalcini-c295b4.netlify.app/"><img src={Calc} alt="Calculadora" /></a>

                            <div className="p_legendas">
                                <h1>Calculadora</h1>
                                <p>Calculadora com tema escuro, desenvolvida a partir de React.</p>
                            </div>
                    
                    </div>
                    <div className="p_semi_container c_2">
                        
                        <a href="https://serene-poincare-7e567a.netlify.app"><img src={Imc} alt="Calculadora" /></a>

                            <div className="p_legendas">
                                <h1>Calculo de IMC</h1>
                                <p>Aplicação que faz o cálculo autómatico de IMC, sendo necessário só inserir peso e altura.</p>
                            </div>

                    </div>
                </div>

            </div>

        </div>

    );
}

export default Projetos;