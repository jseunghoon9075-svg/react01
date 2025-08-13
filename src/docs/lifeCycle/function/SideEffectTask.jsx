import React, { useEffect, useState } from 'react';

const SideEffectTask = () => {

    const [number, setNumber] = useState(0)
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const getData = async () => {
            try {
                const dataLength = 10 * number
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${dataLength}&_limit=10`)
                if (!response.ok) throw new Error(`${response} todos datas fetch Error`)
                const data = await response.json()
                if (!data.length) throw new Error('todos 데이터가 없음')
                return data
            } catch (error) {
                console.log(`${error.message}`)
            }
        }
        getData()
            .then((datas) => {
                setDatas(datas)
                setLoading(false)
            })
            .catcH(() => {
                setLoading(true)
            })
            .setLoading
    }, [number])

    const dataList = datas.map(({ title }, i) => <li key={i}>{title}</li>)

    if(loading) return (
        <div>로딩중....</div>
    )

    return (
        <div>
            <h1>{number}</h1>
            <ul>
                {dataList}
            </ul>
            <button onClick={() => setNumber(number + 1)}>+</button>
            {/* <button onClick={() => }>{getData}</button> */}
        </div>
    );
};

export default SideEffectTask;