import React from 'react';

const PropsComponent02 = (props) => {

    console.log(props)
    return (
        <>
            {props.children}
        </>
    );
};

export default PropsComponent02;