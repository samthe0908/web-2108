import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskCard from "./cards/TaskCard";
import TaskList from "./cards/TaskList";

const GetTaskByName = ()=>{
    const [data, setData] = useState([])
    const [name, setName] = useState('')

    const sendDataToApi = () =>{
        TaskService.getTaskByName(name)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <article>
                <h1> Sök och hämta </h1>
                <span> namn: </span>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <button onClick={sendDataToApi}>Sök</button>
                <button onClick={ () => setData([]) }>Rensa</button>
                <TaskList  tasks={data}/>
            </article>
        </>
    )
}
export default GetTaskByName