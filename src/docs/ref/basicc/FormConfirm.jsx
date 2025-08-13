import React, { useRef } from 'react';

const FormConfirm = () => {

    const inputRef = useRef([]);
    const onClickSubmit = (e) => {
        console.log(inputRef)
        
        inputRef.current.forEach((input) => {
            if(!input.value) {
                return alert(`${input.name}를 입력하세요`)
            }
        })
    }

    return (
        <div>
            <form>
                <div>
                    <span>아이디</span>
                    <input ref={(el) => inputRef.current[0] = el} type="text" name='id' />
                </div>
                <div>
                    <span>비밀번호</span>
                    <input ref={(el) => inputRef.current[1] = el} type="text" name='password' />
                </div>
                <botton onClick={onClickSubmit} type="button">전송</botton>
            </form>
        </div>
    );
};

export default FormConfirm;