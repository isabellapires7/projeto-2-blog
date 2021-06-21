import React from 'react';
import { Link } from 'react-router-dom';
import './ListaCategorias.css';


const ListaCategorias = ( {lista} ) => {

    return <>
        <div id= 'lista-categorias'>

            <div id='lc-titulo-btn-nova-categoria'>
                <h2 id='lc-titulo'>Lista Categorias </h2>
                <button id='lc-btn-nova-categoria'>Nova Categoria</button>
            </div>
            
            <ul id='lc-categorias'>
                { lista.map( item => 
                    <li className='lc-item' key={item.id}> 
                        { item.descricao }
                        <button className='lc-item-btn-remover'>Remover</button>
                        <Link 
                        className='lc-item-btn-listar-posts'
                        to={ '/posts-por-categoria/${ item.id }' } >
                            Listar Posts
                        </Link>
                     </li> )}
            </ul>
        </div>
    </>
};

export default  ListaCategorias;