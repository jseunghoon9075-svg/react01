import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseValue } from '../../../modules/count';
import useInput from '../../../hooks/useinput';

const Counter = () => {
    // action을 reducer로 전달해주는 훅함수
    const [value, setValue, onChangeValue] = useInput("");
    const dispatch = useDispatch()
    // store
    // useSelector((store) => store) 반드시 리턴값이 필요함
    const { number } = (useSelector((state) => state))


    return (
        <div>
            {/* 함수를 사용해서 리턴값을 날려주는거임 함수만 사용X */}
            <div>
                <button onClick={() => { dispatch(increase()) }}>+</button>
                {number}
                <button onClick={() => { dispatch(decrease()) }}>-</button>
            </div>
            <div>
                <input type="text" value={value} onChange={onChangeValue} />
                {/* 
                    정수인지 아닌지 유효성 검사방법
                    ->
                */}
                <button onClick={() => {
                    if(!-value) return alert("정수만 입력하세요\nex)10")
                    dispatch(increaseValue(+value)) 
                    
            }}
                    >더하기</button>
            </div>
        </div>
    );
};

export default Counter;