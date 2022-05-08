import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskList from "./cards/TaskList";
import TaskCard from "./cards/TaskCard";

const GetTaskById = ()=>{
    const [data, setData] = useState([])
    const [id, setId] = useState('')

    const sendDataToApi = () =>{
        TaskService.getTaskById(id)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <article>
                <h1> Sök och hämta </h1>
                <span> ID: </span>
                <input type="text"
                       value={id}
                       onChange={event => setId(event.target.value)}/>
                <button onClick={sendDataToApi}>Sök</button>
                <button onClick={ () => setData([]) }>Rensa</button>
                {data.name ? <TaskCard name={data.name}
                                   task={data.task}/>:''}

            </article>
        </>
    )
}
export default GetTaskById