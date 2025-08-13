import React, { useState } from 'react';

// result는 사용자가 입력한 결과

const Colors = () => {
    const [result, setResult] = useState("")
    const [colors, setColors] = useState("black")

    const changeText = (e) => {
        setResult(e.target.value)
    }

    return (
        <div>
            <p className='text-box' style={{ color: colors }}>{result}</p>
            <input type="text" onChange={changeText} />
            <button onClick={() => setColors('red')}>빨간색 버튼</button>
            <button onClick={() => setColors('blue')}>파란색 버튼</button>
            <button onClick={() => setColors()}>분홍색 버튼</button>
        </div>
    );
};

export default Colors;

// const changeRed = () => {
//     setColors('red')
// }
// const changeBlue = () => {
//     setColors('blue')
// }
// const changePink = () => {
//     setColors()
// }


// const Colors = () => {
//     const [result, setResult] = useState("")
//     const [colors, setColors] = useState("black")

//     const changeText = (e) => {
//         setResult(e.target.value)
//     }

//     const changeRed = () => {
//         setColors('red')
//     }
//     const changeBlue = () => {
//         setColors('blue')
//     }
//     const changePink = () => {
//         setColors()
//     }

//     return (
//         <div>
//             <p style={{color : colors}}>{result}</p>
//             <input type="text" onChange={changeText} />
//             <button onClick={changeRed}>빨간색 버튼</button>
//             <button onClick={changeBlue}>파란색 버튼</button>
//             <button onClick={changePink}>분홍색 버튼</button>
//         </div>
//     );
// };