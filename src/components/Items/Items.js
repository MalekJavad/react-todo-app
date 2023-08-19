import React from "react";

import './Items.css';

import Item from '../Item/Item.js';

const Items = (props) => {
    return (
        <div className="fade">
            <ul>
                {props.data.map( (item, index) => {
                    return (
                        <Item
                            key={index}
                            title={item.title}
                            crossItem={() => props.cross(index)}
                            deleteItem={() => props.delete(index)}
                            complete={item.complete}
                        />
                    )
                })}
            </ul>
        </div>
    );
};

export default Items;
