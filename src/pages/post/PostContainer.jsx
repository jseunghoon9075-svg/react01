import React from 'react';
import { Outlet } from 'react-router-dom';
import { PostsProvider } from '../../context/PostsContext';

const PostContainer = () => {
const name = "홍길동동"
    return (
        <PostsProvider>
            <div>배너</div>
            <Outlet context={name}/>
        </PostsProvider>
    );
};

export default PostContainer;