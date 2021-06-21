import React from 'react';
import './DetalhesPost.css';
import { useParams } from 'react-router-dom';

const DetalhesPost = () => {

    const { id } = useParams();

    return (
        
        <div id='cc-detalhes-post'>
            <h2>Detalhes Post</h2>
            <p>Id selecionado: {id} </p>
        </div>
        
    );
};

export default  DetalhesPost;