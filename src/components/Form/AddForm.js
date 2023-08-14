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
    }
    , [props])

    return (
        <div>
            <Input 
                refValue={inputRef} 
                inputType="text" 
                placeholderText="Enter your task here"
                onchange={(event) => setInput(event.target.value)}
            />
            <Button className="add" buttonType="button" click={() => {props.addItem(input); console.log('adding')}}>
                Add
            </Button>
        </div>
    );
};

export default AddForm;
