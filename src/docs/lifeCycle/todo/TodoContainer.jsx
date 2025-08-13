import { useEffect, useState } from "react";
import getTodos from "./getTodos.js";
import Todo from "./Todo.jsx";
import TodoInsert from "./TodoInsert.jsx";

const TodoContainer = () => {

    const [todos, setTodos] = useState([]);
    const [handleTodos, setHandleTodos] = useState(false)

    useEffect(() => {
        getTodos("http://localhost:4000/todos")
            .then(setTodos)
            .catch(console.error);
    }, [handleTodos])

    const props = {
        handleTodos: handleTodos ,
        setHandleTodos: setHandleTodos 

    }


    // 스프레드 문법 : 키와 벨류를 하나씩 뿌림
    const todoList = todos.map((todo, i) => <Todo key={i} todo={todo} {...props} />)

    return (
        <div>
            <TodoInsert todos={todos} {...props} />
            <h1>남은 할 일의 개수: {todoList.length && todos.length}개</h1>
            <ul>
                {todoList}
            </ul>
        </div>
    );
};

export default TodoContainer;