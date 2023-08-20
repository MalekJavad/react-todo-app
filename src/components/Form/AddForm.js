import React from "react";
import { useState, useRef, useEffect } from "react";

import './AddForm.css';

import Button from '../../UI/Button/Button.js';
import Input from '../../UI/Input/Input.js';

const AddForm = (props) => {
    const [input, setInput] = useState('');
    const inputRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        inputRef.current.value="";
        setInput('')
        inputRef.current.focus();
        inputRef.current.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                buttonRef.current.click();
              }
        })
    }
    , [props])

    return (
        <div className="form">
            <Input 
                refValue={inputRef} 
                inputType="text" 
                placeholderText="عنوان تسک خود را وارد کنید"
                onchange={(event) => setInput(event.target.value)}
            />
            <Button id="Add" refValue={buttonRef} className="add" buttonType="button" click={() => {props.addItem(input)}}>
                افزودن
            </Button>
        </div>
    );
};

export default AddForm;
