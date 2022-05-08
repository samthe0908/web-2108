import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskList from "./cards/TaskList";
import TaskCard from "./cards/TaskCard";

const UpdateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [task, setTask] = useState('')


    const sendDataToApi = () => {
        const changedTask = {
            'name':name,
            'task':task

        }
        TaskService.updateTask(id, changedTask)
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }
    return (
        <>
            <article>
                <h1> Uppdatera Todo</h1>
                <span> ID: </span>
                <input type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}/>
                <br/>
                <span> Nytt namn: </span>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <br/>
                <span> Ny task: </span>
                <input type="text"
                       value={task}
                       onChange={event => setTask(event.target.value)}/>
                <br/>

                <button onClick={sendDataToApi}>Uppdatera</button>
                {data.name ? <TaskCard name={data.name}
                                       task={data.task}/>:''}
            </article>
        </>
    )
}
export default UpdateTask