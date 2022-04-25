import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskList from "./TaskList";

const GetAllTasks = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        TaskService.getAllTasks()
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))

    }

    return(
        <>
            <article>
            <h1> Todolist</h1>
                <button onClick={fetchDataFromExternalApi}>
                    Hämta Todolist
                </button>
                <TaskList tasks = {data} />

            </article>
        </>
    )

}

export default GetAllTasks
