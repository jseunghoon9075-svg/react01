


// import React, { useState } from 'react';





// const Counter = () => {

//     const [count, setCount] = useState(0);



//     return (
//     );
// };

// export default Counter;

// import { useReducer } from 'react';

// function reducer(state, action) {
//     switch (action.type) {
//         case "INCREAMENT":
//             return { count: state.count + 1 };
//         case "DECREAMENT":
//             return { count: state.count - 1 };
//         case "RESET":
//             return { count: 0 };
//         default:
//             throw new Error("Unkown action")
//     }
// }

// const initalState = { count: 0 };

// const Counter = () => {

//     const [state, dispatch] = useReducer(reducer, initalState)

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: "INCREAMENT" })}>+</button>
//             <button onClick={() => dispatch({ type: "DECREAMENT" })}>-</button>
//             <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
//         </div>
//     );
// };

// export default Counter;
