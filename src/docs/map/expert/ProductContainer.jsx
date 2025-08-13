import React, { useState } from 'react';

const ProductContainer = () => {

        const [message, setMessage] = useState("")
        const [store, setStore] = useState({
            income: 0,
            productList: [
                {
                    name: "노트북",
                    price: 300000
                },
                {
                    name: "키보드",
                    price: 50000
                },
                {
                    name: "마우스",
                    price: 30000
                },
                {
                    name: "스피커",
                    price: 75000
                },
                {
                    name: "마이크",
                    price: 150000
                },
            ]
        })
    
    const productList = store.productList.map((product, i) => (
        <li key={i}>
            <p>상품명 : {product.name}</p>
            <p>가격 : {product.price.toLocaleString()}</p>
        </li>
    ))

    const buyProduct = (e) => {
        const product = e.target.value
        const productNames = store.productList.map(({name}) => name)
        if(e.key === 'Enter') {
            console.log(store.productList.price)
            if(productNames.includes(product)) {
                setMessage("결제 완료")

                setStore({
                    income: store.income + store.productList[productNames.indexOf(product)].price,
                    productList:store.productList.filter((_, i) => i !== productNames.indexOf(product))
                })
            } else if(!productNames.includes(product)) {
                setMessage("거래 불가")
            } else if(store.productList.length === 0) {
                setMessage("판매 불가")
            } else {
                setMessage("판매 종료")
            }
        }
    }

    return (
        <div>
            <h1>결제 총액: {store.income}</h1>
            <ul>
                {productList}
            </ul>
            <p>{message}</p>
            <input 
            type="text" 
            placeholder='구매할 상품을 입력하세요'
            onKeyDown={buyProduct}
            />
        </div>
    );
};

export default ProductContainer;