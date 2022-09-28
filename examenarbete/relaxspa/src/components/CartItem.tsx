import React from "react";
import {Button, Stack,} from "react-bootstrap";
import erbjudandeItems from "../data/erbjudande.json"
import {useCart} from "../context/CartContext";

type CartItemProps = {
    id: number
    antal: number
}

export function CartItem({id, antal}: CartItemProps) {
    const { removeFromCart } = useCart()
    const item = erbjudandeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center " >
            <img src={item.image} alt="image" style={{width: "125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto ">
                <div>
                    {item.namn} { ""}
                    {antal > 1 && (
                       <span className= "text-muted " style={{fontSize:"1rem"}}>
                          x {antal} st
                       </span>
                    )}
                </div>
                <div className= "text-muted " >
                    à {item.pris} kr
                </div>
            </div>
                <div>
                   {item.pris*antal} kr
                </div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={()=> removeFromCart(item.id)}
            >
                &times;
            </Button>



        </Stack>

    )

}