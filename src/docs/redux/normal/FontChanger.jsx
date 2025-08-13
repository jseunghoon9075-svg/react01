import React, { useState } from 'react';
import useInput from '../../../hooks/useinput';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSize, fontsize } from '../../../modules/font';

const FontChanger = () => {

// 입력값을 변경할거기 때문에 useInput 사용
const [value, setValue, onChangeValue] = useInput("");
const [color, setColor, onChangeColor] = useInput("");

// useSelector로 초기값의 wish를 비구조할당
const style = useSelector((state) => state.font)
// useDispatch 사용하기
const dispatch = useDispatch()
// 인풋 onChange에 useInput으로 가져온 함수 사용하기
// useInput으로 두 개의 인풋에 value를 같은값으로 사용되기떄문에 다른 사용법을 사용용
// 버튼에 함수 선언하고 action주기?
    // value는 redux의 초기값
    return (
        <div>
            <p style={style}>{value}</p>
            <div>
                <input type="text" placeholder='족발 먹고싶어요' value={value} onChange={onChangeValue}/>
                <button onClick={() => { dispatch(changeFontSize())}}>100px크기로 변경</button>
            </div>
            <div>
                <input type="text" placeholder='컬러를 입력하세요' value={color} onChange={onChangeColor} />
                <button onClick={() => { dispatch(color)}}>컬러를 변경</button>
            </div>
        </div>
    );
};

export default FontChanger;