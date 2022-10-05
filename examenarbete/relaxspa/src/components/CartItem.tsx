import React from "react";
import {Button, Stack,} from "react-bootstrap";
import offerItems from "../data/offer.json"
import {useCart} from "../context/CartContext";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart } = useCart()
    const item = offerItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center " >
            <img src={item.image} alt="image" style={{width: "125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto ">
                <div>
                    {item.name} { ""}
                    {quantity > 1 && (
                       <span className= "text-muted " style={{fontSize:"1rem"}}>
                          x {quantity} st
                       </span>
                    )}
                </div>
                <div className= "text-muted " >
                    à {item.price} kr
                </div>
            </div>
                <div>
                   {item.price*quantity} kr
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