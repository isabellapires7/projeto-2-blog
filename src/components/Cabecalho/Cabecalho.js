import React from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal';

const Cabecalho = () => {
    return (
        <header>

            <div id='c-titulo-temas'>

                <h1>Barcelona</h1>

                <div id='c-temas'>
                    <p>Temas:</p>
                    <button id='c-tema-rosa'>Rosa</button>
                    <button id='c-tema-roxo'>Roxo</button>
                    <button id='c-tema-azul'>Azul</button>
                    <button id='c-tema-cinza'>Cinza</button>
                </div>

            </div>

            <MenuPrincipal />

        </header>
    );
};

export default  Cabecalho;