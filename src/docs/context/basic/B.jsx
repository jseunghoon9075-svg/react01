import React from 'react';
import C from './C';
import CharContext from './CharContext';

const B = ({ name }) => {
    return (
        <div>
            <C name={name} />
            <CharContext.Consumer>
                {(context) => console.log(context)}
                
            </CharContext.Consumer>
        </div>
    );
};

export default B;