import React from "react";
import Products from "./Products";
import {Route, Routes} from "react-router-dom";

const Pages=({cartItems, productItems, setCartItems}) => {
    return(
    <div>
        <Routes>
            <Route path="/">Home</Route>
            <Route path="/products" element={<Products cartItems={cartItems} productItems={productItems} setCartItems={setCartItems}/>} />
            <Route path="/contact">Home</Route>
        </Routes>
    </div>
    )
}
export default Pages;