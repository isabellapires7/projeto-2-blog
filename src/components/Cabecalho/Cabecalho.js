import React from 'react';
import './Cabecalho.css';
import MenuPrincipal from './MenuPrincipal/MenuPrincipal';
import { COR_PADRAO, COR_1, COR_2, COR_3 } from '../../utils/coresTema'

const Cabecalho = ( {funcaoConfigurarTema} ) => {
    return (
        <header>

            <div id='c-titulo-temas'>

                <img id='img-sagrada-familia'  src='./imagens/sagrada-familia.png' />

                <h1>BARCELONA</h1>

                <div id='c-temas'>
                    <p>Temas:</p>

                    <button 
                        id='c-tema-branco'
                        onClick={ () => { funcaoConfigurarTema( 'COR_2' ) } }>
                            Branco
                    </button>

                    <button 
                        id='c-tema-cinza'
                        onClick={ () => { funcaoConfigurarTema( 'COR_3' ) } }>
                            Cinza
                    </button>

                    <button 
                        id='c-tema-verde'
                        onClick={ () => { funcaoConfigurarTema( 'COR_1' ) } } >
                            Verde
                    </button>

                    <button 
                        id='c-tema-amarelo'
                        onClick={ () => { funcaoConfigurarTema( 'COR_PADRAO' ) } }>
                            amarelo
                    </button>
                </div>

            </div>

            <MenuPrincipal />

        </header>
    );
};

export default  Cabecalho;