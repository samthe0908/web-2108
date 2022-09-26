import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home"
import {Massage} from "./pages/Massage"
import {Behandlingar} from "./pages/Behandlingar"
import {MainNavbar} from "./components/Navbar/Navbar"
import {Footer} from "./components/Footer/Footer";
import {Erbjudande} from "./pages/Erbjudande";
import {About} from "./pages/About";
import {CartProvider} from "./context/CartContext";



function App() {
    return (

         <CartProvider>
            <MainNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Massage" element={<Massage/>}/>
                     <Route path="/Behandlingar" element={<Behandlingar/>}/>
                    <Route path="/Erbjudande" element={<Erbjudande/>}/>
                    <Route path="/About" element={<About/>}/>
                </Routes>
            <Footer/>
        </CartProvider>

  )
}

export default App;
