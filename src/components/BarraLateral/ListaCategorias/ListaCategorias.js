import React from 'react';
import { Link } from 'react-router-dom';
import './ListaCategorias.css';

const ListaCategorias = ( { lista } ) => {
    return (
        
        <div id='bl-lista-categorias'>
            <h4>CATEGORIAS</h4>
        
            <ul>
                { lista.map( item => {
                    return <li key={item.id}> 
                        <Link to={'/posts-por-categoria/${item.id}'}>
                            { item.descricao } 
                        </Link>
                    </li>;
                } ) }
                
            </ul>

        </div>

    );
};

export default  ListaCategorias;