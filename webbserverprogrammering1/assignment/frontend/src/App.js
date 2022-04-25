import Alive from "./components/Alive";
import GetAllTasks from "./components/GetAllTask";
import CreateTask from "./components/CreateTask";
import GetTaskByName from "./components/GetTaskByName";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";

function App() {
  return (
   <>
       {/*<Alive/>*/}
       <CreateTask/>
       <GetAllTasks/>
       <GetTaskByName/>
       <UpdateTask/>
       <DeleteTask/>


   </>
  );
}

export default App;
