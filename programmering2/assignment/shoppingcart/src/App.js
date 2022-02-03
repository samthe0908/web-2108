import './utils/global/css/App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";


export default function App() {
  return (
      <div>
        <Router>
        <Navbar/>
        </Router>
      </div>



  )
}