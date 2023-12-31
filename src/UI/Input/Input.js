import React from "react";

import './Input.css';

const Input = (props) => {
    return (
        <input ref={props.refValue} type={props.inputType} placeholder={props.placeholderText} onChange={props.onchange} value={props.inputValue}/>
    );
};

export default Input;
