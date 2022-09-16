import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        // Si hay un valor en el input t ademas no es solo espacios
        //trim() -> saca espacios de los caracteres 
        if(task.title.trim()){
            task.title = task.title.trim()
            //Tarea nueva se agrega en el inicio
            const updatedTask = [task, ...tasks]
            setTasks(updatedTask);
        }
    }

    const deleteTask = (id)=>{
        const updatedTask = tasks.filter(task => task.id !== id)
        setTasks(updatedTask);
    }
    const completedTask = (id) =>{
        const updatedTask = tasks.map(task=>{
            if(task.id === id){
                task.completed = !task.completed
            }
            return task;
        });

        setTasks(updatedTask);
    }
    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <div className="taskContainer">
                {tasks.map((task) => {
                    console.log("Tarea", task);
                    return (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            //description={task.description}
                            completed={task.completed}
                            deletedTask = {deleteTask}
                            completedTask = {completedTask}
                        />
                    );
                })}
            </div>
        </div> //Esto es un fragment
    );
};
export default TaskList;