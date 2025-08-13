import React, { useRef, useState } from 'react';

const CheckBoxRef = () => {

    const [result, setResult] = useState("좋아하는 운동체크하기");
    const inputRef = useRef([]);
    const onClickToPrintHobby = () => {
        console.log(inputRef.current)
        inputRef.current.reduce((prev, cur, i, arr) => {
            console.log(i.valueOf(prev))
        })
    }

    return (
        <div>
            <p>{result}</p>
            <label>
                <span>축구
                    <input type="checkbox" name='hobby' ref={(el) => inputRef.current[0] = el} value="축구" />
                </span>
            </label>
            <label>
                <span>야구
                    <input type="checkbox" name='hobby' ref={(el) => inputRef.current[1] = el} value="야구" />
                </span>
            </label>
            <label>
                <span>농구
                    <input type="checkbox" name='hobby' ref={(el) => inputRef.current[2] = el} value="농구" />
                </span>
            </label>
            <div>
                <button onClick={onClickToPrintHobby}>취미 확인하기</button>
            </div>
        </div>
    );
};

export default CheckBoxRef;