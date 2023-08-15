import React from "react";
import { useState } from "react";

import './Todo.css';

import AddForm from '../../components/Form/AddForm.js';
import Items from '../../components/Items/Items.js';

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const addItem = (item) => {
        if ((item !== '') && (!tasks.some((obj)=>obj.title===item))) {
            setTasks([
                ...tasks,
                {
                    title: item,
                    complete: false,
                },
            ]);
        }
    };
    
    const deleteItem = (index) => {
        let current_tasks = [...tasks];
        current_tasks.splice(index, 1);
        setTasks(
            current_tasks
        );
    };
    
    const toggleCrossItem = (index) => {
        let current_tasks = [...tasks];
        if (current_tasks[index].complete) {
            current_tasks[index].complete = false;
        } else {
            current_tasks[index].complete = true;
        }
        setTasks(
            current_tasks
        );
    };

    return (
        <div className="list">
            <AddForm addItem={addItem}/>
            <Items data={tasks} delete={deleteItem} cross={toggleCrossItem} />
        </div>
    );
};

export default Todo;
