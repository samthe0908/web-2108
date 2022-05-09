import TaskService from "../utils/api/service/TaskService";
import {useState} from "react";
import TaskList from './cards/TaskList'

const ShowTasks = () => {
    const [data, setData] = useState([])

        const fetchDataFromExternalApi = () => {
        TaskService.showTasks()
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
                <button onClick={ () => setData([]) }>Rensa</button>
                <TaskList tasks = {data} />

            </article>
        </>
    )

}

export default ShowTasks