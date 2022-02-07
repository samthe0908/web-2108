import './utils/global/css/App.css';
import data from "./components/Data";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import Products from "./components/Products";
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";



export default function App() {
    const {productItems} = data;
    const [cartItems, setCartItems] = useState([]);

    return (
      <div>
        <Router>
            <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Products productItems={productItems}/>} />*/}
            {/*</Routes>*/}
            <Pages productItems={productItems} cartItems={cartItems} setCartItems={setCartItems}/>
        </Router>
      </div>

  )
}