import React from "react";
import {Offcanvas, Stack} from "react-bootstrap";
import {useCart} from "../context/CartContext";
import {CartItem} from "./CartItem";
import erbjudandeItems from "../data/erbjudande.json"



type CartProps ={
    isOpen:boolean
}

export function Cart({ isOpen }: CartProps){
    const {closeCart, cartItems} = useCart()
    return(
        <Offcanvas style={{width:"500px"}} show = {isOpen} onHide={closeCart} placement="end" >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title> VARUKORG </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3} >
                    {cartItems.map(item =>(
                    <CartItem key={item.id} {...item}/>
                        ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {""} {""} {(cartItems.reduce((total,cartItem) => {
                        const item = erbjudandeItems.find(i => i.id === cartItem.id)
                        return total + (item?.pris || 0) * cartItem.antal
                    }, 0))} kr.
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}