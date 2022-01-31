import {BrowserRouter, Router,  Route, Routes} from "react-router-dom";
import HomeViews from "./views/HomeViews";
import OtherView from "./views/OtherView";


function App() {
    return (
        <BrowserRouter>
            <h1>App</h1>
            <Routes>
                <Route path={'/'} element={<HomeViews/>}/>
                <Route path={'/other'} element={<OtherView/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App;
