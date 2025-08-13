import React, { useState } from 'react';
import fetchTodo, { fetchOptions } from './fetchTodo';

const Todo = ({ todo, handleTodos, setHandleTodos }) => {
    const { id, title, isChecked, userId } = todo;

    const [value, setValue] = useState(title)
    const onChangeValue = (e) => setValue(e.target.value)

    const [isEdit, setEdit] = useState(false)
    const handleEdit = () => setEdit(!isEdit)

    const backEndUrl = `http://localhost:4000/todos/${id}`
    // checked를 변경 요청 후 응답
    const updateTitleOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...todo,
            isChecked: !isChecked,
        })
    }
    const onChangeChecked = () => {
        fetchTodo(backEndUrl, updateTitleOptions)
        .then((res) => {
            if (!res.ok) return;
            setHandleTodos(!handleTodos)
        })
    }
    // 수정x    
    const updateTodo = () => {
        const data = {
            ...todo,
            title: value,
        }
        fetchTodo(backEndUrl, fetchOptions("PUT", data))
        .then((res) => {
            if (!res.ok) return;
            alert('체크 수정 완료')
            setHandleTodos(!handleTodos)
        })
        
    }
    
    // 삭제
    const remoteOption = {
        method: "DELETE"
    }
    const remoteTodo = () => {
        fetch(backEndUrl, remoteOption)
            .then((res) => {
                if (!res.ok) return;
                setHandleTodos(!handleTodos)
            })
    }

    return (
        <li>
            <input type="checkbox" checked={isChecked} onChange={onChangeChecked} />
            {isEdit ? <input value={value} onChange={onChangeValue} /> : <span style={{ textDecoration: isChecked ? "line-through" : "" }}>{title}</span>}
            {isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={handleEdit}>수정</button>}
            <button onClick={remoteTodo}>삭제</button>
        </li>
    );
};

export default Todo;