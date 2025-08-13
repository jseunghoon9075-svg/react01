import React from 'react';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div>
            <h1>
                메인 페이지
            </h1>
            <div>
                <Link to={'/intro?jobs=developer'}>개발자 소개페이지로 이동</Link><br />
            </div>
            <div>
                <Link to={'/intro?jobs=planner'}>기획자 소개페이지로 이동</Link>
            </div>
            <div>
                <Link to={'/posts'}>게시판</Link>
            </div>
        </div>
    );
};

export default MainContainer;