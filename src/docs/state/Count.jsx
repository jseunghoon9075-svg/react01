import React, { useState } from 'react';

const Count = () => {

    const [number, setNumber] = useState(0);

    const increase = (e) => {
        setNumber(number + 1)
    }

    const decrease = (e) => {
        setNumber(number - 1)
    }

    const reset = (e) => {
        setNumber(number * 0)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1 증가</button>
            <button onClick={decrease}>-1 감소</button>
            <button onClick={reset}>초기화</button>
        </div>
    );
};

export default Count;