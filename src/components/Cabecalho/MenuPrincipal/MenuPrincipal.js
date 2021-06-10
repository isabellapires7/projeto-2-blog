import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPrincipal.css';

const MenuPrincipal = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/lista-posts' >Post</Link>
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