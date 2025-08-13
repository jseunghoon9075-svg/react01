import React from 'react';

const SimpleCard = ({title, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default SimpleCard;