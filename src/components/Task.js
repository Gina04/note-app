import {AiOutlineCloseCircle} from 'react-icons/ai'
import styles from "../styles/Task.css"
const Task = ({ id, title, completed, deletedTask, completedTask }) => {
    return (
        <div className={completed ? 'completed' : 
        'task'} 
        onClick = {() => completedTask(id)}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <div 
            onClick={() => deletedTask(id)}>
                <AiOutlineCloseCircle /> 
            </div>
        </div>
    );
};
export default Task;