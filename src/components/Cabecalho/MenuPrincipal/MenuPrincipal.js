import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MenuPrincipal.css';
import TemaContext from '../../../contexts/TemaContext';

const MenuPrincipal = () => {

    const tema = useContext(TemaContext);

    return(
        <nav style={ { backgroundColor: tema.corFundoTema } } >
            <ul>
                <li>
                    <Link to='/lista-posts' >Posts</Link>
                </li>
                <li>
                    <Link to='/lista-categorias' >Categorias</Link>
                </li>
                <li>
                    <Link to='/novo-post' >Novo Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuPrincipal;