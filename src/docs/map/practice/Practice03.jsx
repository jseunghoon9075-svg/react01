import React from 'react';

const Practice03 = () => {

    const styleA = {
        color: 'darkred',
        fontWeight: 'bold'
    };

    const styleB = {
        color: 'navy',
        textDecoration: 'underline'
    }

    const isPrimary = true;

    return (
        <>
        <div style={isPrimary ? styleA : styleB}>
            This text has dynamic styling.
        </div>

        <span style={{
            fontSize: isPrimary ? '1.5em' : '1em',
            opacity: isPrimary ? 1 : 0.5
        }}>
            So does this text.
        </span>
        </>
    );
};

export default Practice03;
{/* react 에서는 for 속성은 htmlFor로 작성한다
<label htmlFor="username">Username :</label>
<input
    type="text"
    id='username'
    className='input-field'
    autoComplete='off'
    maxLength={20}
    spellCheck={true}
    readOnly={false}
    tabIndex={0}
    disabled={disableInput}
    placeholder={disableInput ? "(DISABLED)" : "Enter your name"}
    /> */}