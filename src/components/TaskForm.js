import { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

const TaskForm =({onSubmit})=>{
    const [input, setInput] = useState("");

    const handleChange = (e) =>{
        console.log("Event in form ", e);
        console.log("Target i Form", e.target);
        console.log("Value in Form", e.target.value);
        setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Event on Submit", e); 
        // Agregue una tarea nueva
        const newTask = {
            id:uuidv4(),
            title: input,
            completed: false,
        }
        onSubmit(newTask);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write your task"
                name="text"
                onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm;