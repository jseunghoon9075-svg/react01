import React, { useState } from 'react';

// 사용자에게 취미를 입력 받고, 화면에 실시간으로 출력한다..
// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue 로 바꾼다.


const Hobby = () => {

const [hobby, setHobby] = useState("")
const [change, setChange] = useState({})

const hobbyText = (e) => {
    const style = e.target.value
    setHobby(e.target.value)


    // ...change = 기존의 무엇을 가져온다
    if(style === "축구"){
        setChange({fontSize: "50px"})
    }else if(style === "농구"){
        setChange({color: "blue"})
    }else{
        setChange({})
    }
}



    return (
        <div>
            <p style={change}>{hobby}</p>
            <input type="text" onChange={hobbyText}/>
        </div>
    );
};

export default Hobby;