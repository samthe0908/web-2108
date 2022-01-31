
import './App.css';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Maincomp from "./components/maincomp";
import WelcomeMassage from "./components/welcomemassage";

function App() {
  return (
      <>
        <Header/>
          <Navbar/>
          <Maincomp/>
          <WelcomeMassage name='lars'/>
      </>



  )
}

export default App;
