import Alive from "./components/Alive";
import CreateTask from "./components/CreateTask";
import ShowTasks from "./components/ShowTasks";
import GetTaskByName from "./components/GetTaskByName";
import GetTaskById from "./components/GetTaskById";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";


function App() {
  return (
    <>
      {/*<Alive/>*/}
      <CreateTask/>
      <ShowTasks/>
      <GetTaskByName/>
      <GetTaskById/>
      <UpdateTask/>
        <DeleteTask/>


    </>
  )
}

export default App;
