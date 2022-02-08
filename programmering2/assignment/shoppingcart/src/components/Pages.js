import React from "react";
import Products from "./view/Products";
import Home from "./view/Home";
import Contact from "./view/Contact";
import Cart from "./Cart";
import {Route, Routes} from "react-router-dom";



const Pages=({cartItems, productItems, setCartItems}) => {
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products cartItems={cartItems} productItems={productItems} setCartItems={setCartItems}/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} productItems={productItems} setCartItems={setCartItems}/>} />
        </Routes>
    </div>
    )
}
export default Pages;