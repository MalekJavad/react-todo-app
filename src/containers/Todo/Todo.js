import React from "react";
import { useState } from "react";

import './Todo.css';

import AddForm from '../../components/Form/AddForm.js';
import Items from '../../components/Items/Items.js';


const Todo = () => {
    const [tasks, setTasks] = useState([]);


    const addItem = (item) => {
        setTasks([
            ...tasks,
            {
                title: item,
                complete: false,
            },
        ]);
        console.log(tasks)
    };
    
    const deleteItem = (item) => {
        let current_tasks = [...tasks];
        current_tasks = current_tasks.filter((data)=>data !== item ? data : null);
        setTasks(
            current_tasks
        );
    };
    
    const crossItem = (item) => {
        let current_tasks = [...tasks];
        current_tasks.map((task) => {
            if (task.title === item.title) {
                task.complete = true;
            };
        });
        setTasks(
            current_tasks
        );
    };

    return (
        <div>
            <AddForm addItem={addItem}/>
            <Items data={tasks} delete={deleteItem} cross={crossItem} />
        </div>
    );
};

export default Todo;
