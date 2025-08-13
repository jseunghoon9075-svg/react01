import React, { useState } from 'react';
import fetchTodo, { fetchOptions } from './fetchTodo';

const TodoInsert = ({ todos, handleTodos, setHandleTodos }) => {

    const [value, setValue] = useState("")
    const dataUrl = "http://localhost:4000/todos"
    const confirmMsg = `이대로 추가하시겠습니까?`
    const alertMsg = '알 수 없는 오류가 발생했습니다.'
    const scdAlertMsg = '할 일 추가가 완료 되었습니다.'
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    // 데이터삽입
    const data = {
        id: (todos.length + 1).toString(),
        title: value,
        isChecked: false
    }
    const insertTodo = (e) => {
        if (e.key === 'Enter') {
            if (!window.confirm(confirmMsg)) return;
            fetchTodo(dataUrl, fetchOptions("POST", data))
                .then((res) => {
                    console.log(res)
                    if (!res.ok) return alert(alertMsg);
                    alert(scdAlertMsg)
                    setHandleTodos(!handleTodos)
                })
                .catch(console.error)
        }
    }
    return (
        <div>
            <input
                type="text"
                onChange={onChangeValue}
                onKeyDown={insertTodo}
                placeholder='오늘 할 일을 추가해볼까요?' />
        </div>
    );
};

export default TodoInsert;