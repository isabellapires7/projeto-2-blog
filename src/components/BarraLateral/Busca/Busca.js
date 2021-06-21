import React from 'react';

import './Busca.css';


const Busca = () => {
    return (
        
        <div id='busca'>

            <input 
                id='b-campo-busca'
                placeholder='Pesquisar' 
                title='Pesquisa' 
            />

            <button id='b-btn-busca'>
                <img src='/imagens/loupe.png' />
            </button>

        </div>
        
    );
};

export default  Busca;