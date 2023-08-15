import React from "react";
import { useState } from "react";

import './Todo.css';

import AddForm from '../../components/Form/AddForm.js';
import Items from '../../components/Items/Items.js';

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const indexFinder = (arr, title) => {
        const id = arr.findIndex(obj => obj.title === title);
        return id;
    }

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
    
    const deleteItem = (title) => {
        let current_tasks = [...tasks];
        current_tasks.splice(indexFinder(current_tasks, title), 1);
        setTasks(
            current_tasks
        );
    };
    
    const toggleCrossItem = (title) => {
        let current_tasks = [...tasks];
        const id = indexFinder(current_tasks, title)
        if (current_tasks[id].complete) {
            current_tasks[id].complete = false;
        } else {
            current_tasks[id].complete = true;
        }
        setTasks(
            current_tasks
        );
    };

    return (
        <div className="list">
            <AddForm addItem={addItem}/>
            <Items keyFunc={indexFinder} data={tasks} delete={deleteItem} cross={toggleCrossItem} />
        </div>
    );
};

export default Todo;
