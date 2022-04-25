// import TaskCard from "./TaskCard";
import TaskList from "./TaskList";
import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";

const CreateTask = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [todo, setTodo] = useState('')

    const sendDataToApi = () => {
        const newTask = {
            'name': name,
            'todo': todo,
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
          <span> namn: </span>
          <input type="text"
                value={name}
                onChange={event => setName(event.target.value)}/>
          <br/>
          <span>Todo:</span>
          <input type="text"
                 value={todo}
                 onChange={event => setTodo(event.target.value)}/>
          <br/>
          <button onClick={sendDataToApi}>Skapa Ny</button>
          <TaskList tasks = {data}/>

      </article>

      </>
  )
}
export default CreateTask