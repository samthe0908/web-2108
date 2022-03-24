import React from "react";
import Products from "./view/Products";
import Home from "./view/Home";
import Contact from "./view/Contact";
import Cart from "./Cart";
import {Route, Routes} from "react-router-dom";



const Pages=({ productItems, cartItems, setCartItems,clearCart}) => {
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products productItems={productItems} cartItems={cartItems}  setCartItems={setCartItems}/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} clearCart={clearCart}/>}/>

        </Routes>
    </div>
    )
}
export default Pages;