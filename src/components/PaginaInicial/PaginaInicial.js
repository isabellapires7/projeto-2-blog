import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './PaginaInicial.css';
import Cabecalho from '../Cabecalho/Cabecalho';
import ConteudoCentral from '../ConteudoCentral/ConteudoCentral';
import BarraLateral from '../BarraLateral/BarraLateral';
import Rodape from '../Rodape/Rodape';

const PaginaInicial = () => {
    return (
        <BrowserRouter>
        
            <div id='box-pagina-inicial'>

                <Cabecalho />

                <div id='container'>
                    <ConteudoCentral />
                    <BarraLateral />
                </div>

                <Rodape />

            </div>

        </BrowserRouter>
    );
};

export default  PaginaInicial;