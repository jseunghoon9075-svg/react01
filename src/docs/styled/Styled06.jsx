import React from 'react';
import A from './style';

const Styled06 = () => {
    return (
        <div>
            <A.Form className='Form'>
                <A.Wrap className='Wrap'>
                    <span>아이디</span>
                        <input type="text" />
                </A.Wrap>
                <A.Wrap className='Wrap'>
                    <span>비밀번호</span>
                        <input type="text" />
                </A.Wrap>
                    <button type='button'>전송</button>
            </A.Form>
        </div>
    );
};

export default Styled06;