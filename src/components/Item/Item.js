import React from "react";

import './Item.css';

import Button from '../../UI/Button/Button.js';

const Item = (props) => {
    return (
        <li className="item">
            <span className={props.complete ? "title crossed" : "title"}>
                {props.title}
            </span>
            <div className="controls">
                <Button className={props.complete ? "not-cross" : "cross"} buttonType="button" click={props.crossItem}>
                    {props.complete ? "انجام نشده" : "انجام شد"}
                </Button>
                <Button className="delete" buttonType="button" click={props.deleteItem}>
                    حذف
                </Button>
            </div>
        </li>
    );
};

export default Item;
