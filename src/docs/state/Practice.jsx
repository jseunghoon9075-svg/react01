import React from 'react'

// const Counter = () => {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>현재 카운트: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1 증가</button>
//     </div>
//   )
// // }


// function BasicExpressions() {
//     const name = "John";
//     const age = 25;
//     const isAdmin = true;

//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age next year: {age + 1}</p>
//             <p>{name + "'s Profile"}</p>
//             <p>{`${name} is ${age} years old`}</p>
//             <p>Admin status: {String(isAdmin)}</p>
//         </div>
//     );
// }


// function ObjectArrayExpressions() {

//     const user = {
//         name: "홍길동",
//         email: "gildong@example.com"
//     };

//     const colors = ["red", "blue", "green"];
//     const numbers = [1, 2, 3, 4, 5];

//     return (
//         <div>
//             <p>User: {user.name} ({user.email})</p>
//             <p>First color: {colors[0]}</p>
//             <p>Color count: {colors.length}</p>

//             <p>Doubles: {
//                 numbers.map(num => num * 2 + " ").join(", ")
//             }</p>

//             <p>Evens: {
//                 numbers.filter(n => n % 2 === 0).join(", ")
//             }</p>
//         </div>
//     );
// }


const FunctionExpressions = () => {
    const getGreeting = (name) => `Hello, ${name}!`;

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
    const items = [
        { id: 1, price: 10 },
        { id: 2, price: 20 },

    ];
    return (
        <div>
            <p>{getGreeting("gildong")}</p>
            <p>Today: {formatDate(new Date())}</p>
            <p>Total: ${calculateTotal(items)}</p>
            <p>Good {(() => {
                const hours = new Date().getHours();
                return hours < 12 ? "Morning!" : "Afternoon!";
            })()}
            </p>
        </div>
    )
}


export default FunctionExpressions;
