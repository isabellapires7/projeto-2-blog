import React, { useEffect, useState } from 'react';
import './BarraLateral.css';
import Busca from './Busca/Busca';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import pegarCategorias from '../../utils/pegarCategorias'; 


const BarraLateral = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect( () => {
        pegarCategorias( setCategorias );
    }, [] );

    return (
        
        <aside>
            
            <Busca />
            <ListaCategorias lista={categorias} />

        </aside>
        
    );
};


export default  BarraLateral;