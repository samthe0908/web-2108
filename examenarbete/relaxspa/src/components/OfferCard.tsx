import React from "react";
import {Card, Button} from "react-bootstrap";
import {useCart} from "../context/CartContext";

type OfferItemProp ={
    id: number
    name: string
    desc:string
    price: number
    image:string
}
export function OfferCard({id, name, desc, price, image}:OfferItemProp){
    const{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    }= useCart()

    const Quantity =  getItemQuantity(id);
    const BuyButton = () => {
        return (
            <Button onClick={() => increaseCartQuantity(id)} className="fs-4 w-100"
                    style={{
                        backgroundColor: "#AE9A63",
                        color: "white",
                        borderColor: "#AE9A63",
                    }}
            >KÖP</Button>)
    }
    const IncreaseDecreaseButton = () =>{
        return(
            <div className="d-flex align-items-center justify-content-center flex-column"
                 style={{gap:".5rem"}}>
                <div className="d-flex align-items-center justify-content-center flex-row"
                     style={{gap:".5rem"}}>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <span className="fs-3">{Quantity}</span>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button onClick={() => removeFromCart(id)} variant="danger" size="sm" >ta bort</Button>
            </div>
        )
    }

    return(
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={image}
                height="200px"
                width="500px"
                style={{objectFit:"cover"}}/>
            <Card.Body className="d-flex flex-column ">
                <Card.Title className="d-flex mb-4  flex-column">
                    <span>{name}</span>
                    <span>{price} kr</span>
                </Card.Title>
                <Card.Text className="d-flex flex-column ">
                    <span>{desc}</span>
                </Card.Text>
                <div className="mt-auto">
                    {Quantity === 0?(BuyButton()):IncreaseDecreaseButton()}
            </div>
            </Card.Body>
        </Card>
    )
}