import React, { useState } from 'react';
import A from './style';

const Styled04 = () => {

    const [value, setValue] = useState("");
    const [color, setColor] = useState("");
    const onChangeValue = (e) => setValue(e.target.value)
    const handleColor = (e) => {
        if(e.key === 'Enter') {
            setColor(value)
        }
    }

    return (
        <div>
            <input type="text" onChange={onChangeValue} onKeyDown={handleColor}/>
            <A.H1 color={color}>컬러가 적용될 폰트</A.H1>
            {/* <A.P fontColor={"red"}>하이</A.P> */}
        </div>
    );
};

export default Styled04;