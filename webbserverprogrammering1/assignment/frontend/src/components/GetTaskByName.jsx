import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskCard from "./TaskCard";

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
            <button onClick={sendDataToApi}>Sök namn</button>
        {data.name ? <TaskCard name={data.name}
                               todo={data.todo}/>
            : <h3>{data}</h3>
        }
            </article>
    </>
    )
}
export default GetTaskByName