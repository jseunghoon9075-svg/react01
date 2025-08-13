import React from 'react';
import { Link, useParams } from 'react-router-dom';

const HobbyContainer = () => {

    // url parammeter: url에 parameter를 심어서 전송하는 방법법
    const {hobbies, name} = useParams()
    console.log(useParams())

    return (
        <div>
            <p>이름: {name}</p>
            <p>취미: {hobbies}</p>
        </div>
    );
};

export default HobbyContainer;