import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskCard from "./TaskCard";

const DeleteTask =() => {
    const [data, setData] = useState('')
    const [name, setName] = useState('')

        const sendDataToApi = () => {
            TaskService.deleteTask(name)
                .then(response => {
                    setData(response.data)
                })
                .catch(error => console.log(error))
        }
        return(
        <>
        <article>
            <h1> Radera Todo </h1>
            <span> namn: </span>
            <input type="text"
                   value={name}
                   onChange={event => setName(event.target.value)}/>
            <button onClick={sendDataToApi}>Radera</button>
            <h3>{data}</h3>

        </article>
    </>
)
}
export default DeleteTask