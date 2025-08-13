import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostListContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            // 동기와 비동기의 흐름이 다르기 때문에 async, await를 사용
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts
        }
        getPosts()
            .then((posts) => posts.slice(0, 30))
            .then(setPosts)
            .catch(console.error)
    }, [])

    const postList = posts.map(({id, title }, i) => (
        <Link to={`/posts/read/${id}`}>
            <li key={i}>
                제목 {i + 1} : {title}
            </li>
        </Link>
    ))



    return (
        <ul>
            {postList}
        </ul>
    );
};

export default PostListContainer;