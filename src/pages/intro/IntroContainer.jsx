import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import jobs from '../../modules/jobs';

const IntroContainer = () => {
    const { jobs } = useSelector(state => state.jobs)
    // url?key=value : 쿼리스트링
    const [ searchParams ] = useSearchParams()
    const job = (searchParams.get("jobs"))
    const { name, skills } = (jobs[job])
    const skillList = skills.map((skills, i) => (
        <li key={i}>{skills}</li>
    ))

    return (
        <div>
            <h1>
                소개페이지 : for {job.toUpperCase(job)}
            </h1>
            <p>이름: {name}</p>
            <p>직업: {job}</p>
            <ul>
                {skillList}
            </ul>
        </div>
    );
};

export default IntroContainer;