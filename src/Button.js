import React from 'react';

const  Button = ({ selectQuote }) => {
    return (
        <div  className="SelectQuote">
            <button onClick={selectQuote}>Get Quote</button>
        </div>
    );
};

export default Button;