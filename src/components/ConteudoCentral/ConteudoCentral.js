import React, { useEffect, useState, } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './ConteudoCentral.css';
import ListaPosts from './ListaPosts/ListaPosts';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import NovoPost from './NovoPost/NovoPost';
import pegarCategorias from '../../utils/pegarCategorias'; 
import DetalhesPost from './DetalhesPost/DetalhesPost';
import PostsPorCategoria from './PostsPorCategoria/PostsPorCategoria';
import pegarPosts from '../../utils/pegarPosts';

const ConteudoCentral = () => {

    const [categorias, setCategorias] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect( () => {
        pegarCategorias( setCategorias );
    }, [] );

    useEffect( () => {
        pegarPosts( setPosts );
    }, [] );

    return (
        <main>
            <Switch>

                {/* Redirecionamento */}
                <Route exact path="/">
                    <Redirect to="/lista-posts" />
                </Route>

                <Route path='/lista-posts'>
                    <ListaPosts lista={ posts } />
                </Route>

                <Route path='/lista-categorias'>
                    <ListaCategorias lista={ categorias } />
                </Route>

                <Route path='/novo-post'>
                    <NovoPost />
                </Route>

                <Route path="/detalhes-post/:id" component={DetalhesPost} />
                <Route path="/posts-por-categoria/:idCategoria" component={PostsPorCategoria} />
                
            </Switch>
        </main>
    );
};

export default  ConteudoCentral;