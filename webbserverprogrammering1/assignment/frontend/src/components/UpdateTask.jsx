import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskCard from "./TaskCard";

const UpdateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [newName, setNewName] = useState('')
    const [todo, setTodo] = useState('')
    const [newTodo, setNewTodo] = useState('')

    const sendDataToApi = () => {
        const changedTask = {
            'name':name,
            'newName':newName,
            'todo':todo,
            'newTodo':newTodo,
        }
        TaskService.updateTask(changedTask)
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
                <span> Namn: </span>
                <input type="text"
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <br/>
                <span> Nytt namn: </span>
                <input type="text"
                       value={newName}
                       onChange={event => setNewName(event.target.value)}/>
                <br/>
                <span> Todo: </span>
                <input type="text"
                       value={todo}
                       onChange={event => setTodo(event.target.value)}/>
                <br/>
                <span> Ny Todo: </span>
                <input type="text"
                       value={newTodo}
                       onChange={event => setNewTodo(event.target.value)}/>
                <br/>

                <button onClick={sendDataToApi}>Uppdatera</button>
                {data.name ? <TaskCard name={data.name}
                                       todo={data.todo}/>
                    : <h3>{data}</h3>
                }
            </article>
        </>
    )
}
export default UpdateTask