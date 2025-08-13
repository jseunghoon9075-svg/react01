import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const value = {
        state: { posts: posts },
        actions: { setPosts: setPosts },
        refetch: { isUpdate: isUpdate, setIsUpdate: setIsUpdate },
        error: { error: error },
        loading: { loading: loading }
    }

    useEffect(() => {
        // 동기와 비동기의 흐름이 다르기 때문에 async, await를 사용
        const getPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts
        }
        getPosts()
            .then((posts) => {
                setLoading(false)
                setPosts(posts)
            })
            .catch((error) => {
                setLoading(true)
                console.error(error)
            })
    }, [isUpdate])

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}