import React from 'react'

function Display( props ) {
    return (
        <div>
            <p>{props.result ? `${props.prevStr} = ${props.result}` : '0'}</p>
            <p>{props.error ? props.error : props.string ? props.string : '0'}</p>
        </div>
    );
}

export default Display;