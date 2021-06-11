import React from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal';

const Cabecalho = ( {funcaoConfigurarTema} ) => {
    return (
        <header>

            <div id='c-titulo-temas'>

                <h1>BELLA IN BARCELONA</h1>

                <div id='c-temas'>
                    <p>Temas:</p>

                    <button 
                        id='c-tema-rosa'
                        onClick={ () => { funcaoConfigurarTema( 'rosa' ) } } >
                            Rosa
                    </button>

                    <button 
                        id='c-tema-roxo'
                        onClick={ () => { funcaoConfigurarTema( 'roxo' ) } }>
                            Roxo
                    </button>

                    <button 
                        id='c-tema-azul'
                        onClick={ () => { funcaoConfigurarTema( 'azul' ) } }>
                            Azul
                    </button>

                    <button 
                        id='c-tema-branco'
                        onClick={ () => { funcaoConfigurarTema( 'branco' ) } }>
                            Branco
                    </button>
                </div>

            </div>

            <MenuPrincipal />

        </header>
    );
};

export default  Cabecalho;