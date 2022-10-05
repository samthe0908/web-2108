import {Card, Row, Col, Button} from "react-bootstrap";
import React from "react";

type SearchItemProp ={
    id: number
    cat:string
    name: string
    desc:string
    price: number
    image:string
}

export function SearchCard({id, cat, name, desc, price, image}:SearchItemProp){

       return (
        <div style={{color: "#AE9A63"}}>

            <Row md={2} xs={1} lg={4} >
                <Col >
                    <Card className="h-100">
                        <Card.Img
                            variant="top"
                            src={image}
                            height="200px"
                            width="500px"
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
                </Col>
            </Row>
        </div>
    )}



