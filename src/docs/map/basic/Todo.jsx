import React from 'react';

const Todo = ({ list }) => {
    const { task, done } = list
    const result = (done === true) ? <li>{task}</li> : done
    return result
};

export default Todo;