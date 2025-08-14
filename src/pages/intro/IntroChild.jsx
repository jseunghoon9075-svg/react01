import React from 'react';
import jobs from '../../modules/jobs';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

const IntroChild = () => {
    const { jobs } = useSelector(state => state.jobs)
    const [searchParams] = useSearchParams()
    const job = (searchParams.get("jobs"))
    console.log(jobs)

    return (
        <div>
            <h1>환영합니다!</h1>
            <p><Link to={`/intro?jobs=developer`}>개발자 소개페이지로 이동하기</Link></p>
            <p><Link to={`/intro?jobs=planner`}>기획자 소개페이지로 이동하기</Link></p>
        </div>
    );
};

export default IntroChild;