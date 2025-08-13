import React, { useState } from 'react';

const Name = () => {

    const [result, setResult] = useState("")
    const changeResult = (e) => {
        setResult(e.target.value)
    }
    return (
        <div>
            <p>{result}</p>
            <input type="text" onChange={changeResult}/>
        </div>
    );
};

export default Name;