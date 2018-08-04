import * as React from 'react';

const Button = (props) => {
    return (
        <button
        className="button"
        disabled={props.disabled}
        onClick={props.onClick}
        >
        {props.text}
        </button>
    )
}

export default Button;