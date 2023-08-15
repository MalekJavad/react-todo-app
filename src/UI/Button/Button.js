import React from "react";

import './Button.css';

const Button = (props) => {
    return (
        <button id={props.id} className={props.className} type={props.buttonType} onClick={props.click}>
            {props.children}
        </button>
    );
};

export default Button;
