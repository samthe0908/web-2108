import React, {useState} from "react";
import {Card, Button} from "react-bootstrap";
import {useCart} from "../context/CartContext";

type ErbjudandeItemProp ={
    id: number
    namn: string
    beskrivning:string
    pris: number
    image:string
}
export function ErbjudandeCard({id, namn, beskrivning, pris, image}:ErbjudandeItemProp){
    const{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    }= useCart()

    const antal =  getItemQuantity(id);

    const BuyButton = () => {
        return (
            <Button className="fs-4 w-100"
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
                    <Button>-</Button>
                    <span className="fs-3">{antal}</span>
                    <Button>+</Button>
                </div>
                <Button variant="danger" size="sm" >ta bort</Button>
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
                    <span>{namn}</span>
                    <span>{pris} kr</span>
                </Card.Title>
                <Card.Text className="d-flex flex-column ">
                    <span>{beskrivning}</span>
                </Card.Text>
                <div className="mt-auto">
                    {antal === 0?(BuyButton()):IncreaseDecreaseButton()}
            </div>
            </Card.Body>
        </Card>
    )
}