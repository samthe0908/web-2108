import TaskCard from "./TaskCard";

const TaskList = ({tasks}) => {
    return(
        <>
            {
                tasks.map((task, index)=>{
                    return(
                        <TaskCard key={index}
                                  id={task.id}
                                  todo={task.todo}
                                  name={task.name}
                                  done={task.done}/>


                    )
                })
            }
        </>
    )

}
export default TaskList