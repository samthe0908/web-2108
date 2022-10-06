import {Card, Button} from "react-bootstrap";
import React from "react";

type SearchItemProp ={
    name: string
    desc:string
    image:string
}

export function SearchCard({ name, desc, image}:SearchItemProp){

       return (

                <Card className="h-100">
                        <Card.Img
                            variant="top"
                            src={image}
                            height="200px"
                            style={{objectFit: "cover"}}/>
                        <Card.Body className="d-flex flex-column">
                        <Card.Title className="d-flex mb-4">
                            <span>{name} </span>
                        </Card.Title>
                        <Card.Text className="d-flex flex-column ">
                            <span>{desc}</span>
                        </Card.Text>
                        <Button className="fs-4 mt-auto"
                                style={{
                                    backgroundColor: "#AE9A63",
                                    color: "white",
                                    borderColor: "#AE9A63",
                                }}>BOKA</Button>
                        </Card.Body>
                    </Card>


    )}



