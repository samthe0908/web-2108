import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskCard from "./cards/TaskCard";


const CreateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    const sendDataToApi = () => {
        const newTask = {
            'name': name,
            'task': task,
            "done": false
        }
        TaskService.createTask(newTask)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    return(
        <>
            <article>
                <h1> Skapa ny todo</h1>
                <span> Namn: </span>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <br/>
                <span>Task:</span>
                <input type="text"
                       value={task}
                       onChange={event => setTask(event.target.value)}/>
                <br/>
                <button onClick={sendDataToApi}>Skapa </button>
                {data.name ? <TaskCard name = {data.name}
                                       task = {data.task}
                                        done={data.done}/>:''}

            </article>

        </>
    )
}
export default CreateTask