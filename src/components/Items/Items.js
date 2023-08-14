import React from "react";

import './Items.css';

import Item from '../Item/Item.js';

const Items = (props) => {
    return (
        <ul>
            {props.data.map( (item) => {
                return (
                    <Item
                        key={item.title}
                        title={item.title}
                        crossItem={() => props.cross(item)}
                        deleteItem={() => props.delete(item)}
                        complete={item.complete}
                    />
                )
            })}
        </ul>
    );
};

export default Items;
