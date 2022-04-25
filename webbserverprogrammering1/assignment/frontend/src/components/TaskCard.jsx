import '../utils/styles/global.css';
import {useState} from "react";
import TaskService from "../utils/api/service/TaskService";

const TaskCard = ({id, todo, name, done }) => {
    const [doneTask, setDoneTask] = useState(done)

    function changedDone() {
        TaskService.updateDone(id)
            .then(response => {
                setDoneTask(response.data.done)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='taskCard'>
            <ul className='list'>
                <li className={doneTask? 'done' : null} onClick={changedDone}>
                    <span>{name}</span>
                    <span>{todo}</span>
                </li>
            </ul>
        </div>

    )
}


export default TaskCard