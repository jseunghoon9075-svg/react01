import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

// age를 상수 나이로 설정한다
// 19세 초과 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨" 출력력

const Jsx05 = () => {

    const age = 20;
    const isAdult = age > 19;
    const isEven = age % 2 === 0;
    // const success = "입장 가능"
    // const faled = "입장 불가"
    // const wining = " 당첨 "

    const enter = isAdult ? <PassComponent /> : <NotPassComponent />
    const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />

    return (
        <div>
            {enter}
            {win}
        </div>
    );
};

export default Jsx05;