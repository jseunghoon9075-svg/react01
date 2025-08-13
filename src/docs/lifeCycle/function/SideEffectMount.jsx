import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {
    console.log('초초 마운투투')

    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await response.json()
            setUsers(users)
        }
        getUsers()
    }, [])
    
    
    
    const userList = users.map(({name}, i) => <p key={i}>{name}</p>)

    return (
        <div>
            {userList}
        </div>
    );
};

export default SideEffectMount;