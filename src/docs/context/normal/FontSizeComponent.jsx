import React, { useContext, useState } from 'react';
import { FontContext } from './FontContext';
import useInput from '../../../hooks/useinput';

const FontSizeComponent = () => {

    // context
    const { state, actions } = useContext(FontContext)
    const { setFontSize } = actions
    const { fontSize } = state;


    const [value, setValue, onChangeValue] = useInput("")
    const ChangeFontSize = (e) => {
        if(e.key === 'Enter'){
            setFontSize(value)
        }
    }

    return (
        <div>
            <input type='text' value={value} onKeyDown={ChangeFontSize} onChange={onChangeValue}/>최하위 컴포넌트!😎
            <p>{value}</p>
            <button onClick={() => setFontSize("100px")}>커지는 버튼!</button>
        </div>
    );
};

export default FontSizeComponent;