import React from "react";

import './Item.css';

import Button from '../../UI/Button/Button.js';

const Item = (props) => {
    return (
        <li className="item">
            <div className={props.complete ? "crossed" : null}>
                {props.title}
            </div>
            <Button className="cross" buttonType="button" click={props.crossItem}>
                cross
            </Button>
            <Button className="delete" buttonType="button" click={props.deleteItem}>
                delete
            </Button>
        </li>
    );
};

export default Item;
