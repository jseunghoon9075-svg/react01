import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import IntroContainer from '../intro/IntroContainer';
import { useSelector } from 'react-redux';

const Layout = () => {

    // 공통적인 요소를 묶는 데에 유용함 레이아웃 컴포넌트
    return (
        <div>
            <header>
                <Link to={"/"}>메인</Link>
                <Link to={"/community"}>게시판</Link>
                <Link to={`/intro`}>소개</Link>
                <Link to={"/hobby"}>취미</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;