import React from 'react';
import './ListaPosts.css';
import Post from './Post/Post';

const ListaPosts = () => {
    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default  ListaPosts;