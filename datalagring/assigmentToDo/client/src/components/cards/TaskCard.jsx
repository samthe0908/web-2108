import css from './TaskCard.module.css'
import {useState} from "react";
import TaskService from "../../utils/api/service/TaskService.js";


const TaskCard = ({_id, task, name, done }) => {

    const [doneTask, setDoneTask] = useState(done)

    function changedDone() {
        const payload = {
            newTaskStatus : !doneTask
        }
        TaskService.updateDone(_id, payload)
            .then(response => {
                setDoneTask(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={css.taskCard}>
            <ul className={css.list}>
                <li className={doneTask? css.done : null} onClick={changedDone}>
                    <span>{name}</span>
                    <span>{task}</span>
                    <span>{_id}</span>

                </li>
            </ul>
        </div>

    )
}


export default TaskCard