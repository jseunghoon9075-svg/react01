import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, faSpinner } from '@fortawesome/free-solid-svg-icons'
import S from './style';
const PostReadContainer = () => {
    // url 파라미터를 들고오는 함수
    const { id } = useParams()

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            // 동기와 비동기의 흐름이 다르기 때문에 async, await를 사용
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const post = await response.json()
            return post
        }
        getPosts()
            .then((post) => {
                setLoading(false)
                setPost(post)
            })
            .catch((error) => {
                setLoading(true)
                console.error(error)
            })
    }, [])


    if (loading) {
        return (
            <S.Bg>
                <S.FontAwesomeIcon icon={faSpinner} spinPulse size='2xl' />
            </S.Bg  >
        )
    }

    console.log(post)
    return (
        <div>
            <p>책번호: {post.id}번</p>
            <p>제목: {post.title}</p>
            <p>내용: {post.body}</p>
        </div>
    );
};

export default PostReadContainer;