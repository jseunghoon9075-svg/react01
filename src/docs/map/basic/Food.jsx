import React from 'react';

const Food = ({food}) => {
    console.log(food)
    const {name} = food
    return (
        <li>
            {name}
        </li>
    );
};

export default Food;