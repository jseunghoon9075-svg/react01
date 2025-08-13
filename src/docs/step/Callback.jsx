import React from 'react';

const Callback = () => {
    // 이름에 + "님" 붙이기
    const printName = (name, callback) => {
        callback(name + "님")
    }
    const addHello = (name, callback) => {
        callback(name + "안녕하세요요")
    }
    const askWhere = (name, callback) => {
        callback(name + "어디가세용")
    }


printName("승훈", (result) => {
    addHello(result, (result2) => {
        askWhere(result2, console.log)
    }) 
})







    return (
        <div>

        </div>
    );
};

export default Callback;