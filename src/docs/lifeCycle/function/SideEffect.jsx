import React, { useEffect, useState } from 'react';

const SideEffect = () => {

    const [color, setColor] = useState("")
    const [count, setCount] = useState(0)

                                                    // 랜덤컬러 공식
    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)
    const increase = () => setCount(count + 1)
    const onClickToChangeColor = () => setColor(getRandomColor())

    useEffect(() => {
        console.log("useEffect reRendered")
        
    }, [count])
    console.log("reRendered")
    

    return (
        <div>
            <h1 style={{color}}>오늘 금요일 승찬이 놀러간다.</h1>
            <h1>{count}</h1>
            <button onClick={onClickToChangeColor}>색상 변경</button>
            <button onClick={increase}>+1</button>
        </div>
    );
};

export default SideEffect;