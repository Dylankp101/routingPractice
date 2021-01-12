import React from 'react';

const Color = props => {
    const style = {
        color: `${props.color}`,
        backgroundColor: `${props.bg}`,
    };
    return (

    <div style={style}>
        <p style={style}>The Word is: {props.word}</p>
    </div>
    );
}

export default Color;