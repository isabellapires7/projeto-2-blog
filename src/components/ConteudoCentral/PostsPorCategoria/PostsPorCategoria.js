import React, { useEffect, useState } from 'react';
import './PostsPorCategoria.css';
import { useParams } from 'react-router-dom';
import pegarPosts from '../../../utils/pegarPosts';

const PostsPorCategoria = () => {

    const { idCategoria } = useParams();

    const [posts, setPosts] = useState( [] );
    const [postsFiltrados, setPostsFiltrados] = useState( [] );

    useEffect( () => {
        pegarPosts( setPosts );
    }, [] );

    useEffect( () => {
        if(posts.length > 0) {
            const _postsFiltrados = posts.filter( post => {
                return post.idCategoria === parseInt (idCategoria);
            });
            setPostsFiltrados( _postsFiltrados );
        }
    }, [posts, idCategoria] );

    return (
        
        <div id='cc-detalhes-post'>
            <h2>Posts Por Categoria</h2>
            <p>Id selecionado: {idCategoria} </p>

            <div>
                { postsFiltrados.map( post => {
                    return <p> {post.id} - {post.idCategoria} - {post.descricao} </p>;
                } ) }
            </div>
        </div>
        
    );
};

export default  PostsPorCategoria;