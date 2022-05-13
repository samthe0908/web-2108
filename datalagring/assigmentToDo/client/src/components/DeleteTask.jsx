import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";

const DeleteTask =() => {
    const [data, setData] = useState('')
    const [id, setId] = useState('')

    const sendDataToApi = () => {
        TaskService.deleteTask(id)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return(
        <>
            <article>
                <h1> Radera Todo </h1>
                <span> ID: </span>
                <input type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}/>
                <button onClick={sendDataToApi}>Radera</button>
                <h3>{data}</h3>


            </article>
        </>
    )
}
export default DeleteTask