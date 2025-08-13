import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <strong>오류 발생</strong>
            <p>
                <Link to={"/"}>메인페이지</Link>
            </p>
        </div>
    );
};

export default NotFound;