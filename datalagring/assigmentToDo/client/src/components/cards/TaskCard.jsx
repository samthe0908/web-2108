import css from './TaskCard.module.css'
import {useState} from "react";
import TaskService from "../../utils/api/service/TaskService.js";

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
        <div className={css.taskCard}>
            <ul className={css.list}>
                <li className={doneTask? css.done : null} onClick={changedDone}>
                    <span>{name}</span>
                    <span>{todo}</span>
                </li>
            </ul>
        </div>

    )
}


export default TaskCard