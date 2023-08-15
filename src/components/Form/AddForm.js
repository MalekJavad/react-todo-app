import React from "react";
import { useState, useRef, useEffect } from "react";

import './AddForm.css';

import Button from '../../UI/Button/Button.js';
import Input from '../../UI/Input/Input.js';

const AddForm = (props) => {
    const [input, setInput] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value="";
        inputRef.current.focus();
        setInput('')
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
            <Button id="Add" className="add" buttonType="button" click={() => {props.addItem(input)}}>
                افزودن
            </Button>
        </div>
    );
};

export default AddForm;
