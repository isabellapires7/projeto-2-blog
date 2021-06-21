import React from 'react';
import './ListaPosts.css';
import Post from './Post/Post';

const ListaPosts = ( { lista } ) => {
    return (
        <div>
            {lista.map( post => < Post post={ post } /> ) }
        </div>
    );
};

export default  ListaPosts;