import {Card, Row, Col, Button, Form} from "react-bootstrap";
import treatmentData from "../data/treatment.json"
import React, {useState} from "react";


export function SearchCard(){

    const [searchText, setSearchText ]= useState("")
    // @ts-ignore

    return(
        <div style={{color: "#AE9A63"}}>
            <Row className="mb-4">
                <Form>
                    <Form.Control
                        size="lg"
                        className="d-fle"
                        id="searchInput"
                        type="search"
                        placeholder= "sök"
                        aria-label="Search"
                        onChange={(event) => {
                            setSearchText(event.target.value)
                        }}
                    />
                </Form>
            </Row>
            <Row md={2} xs={1} lg={4} >
                {treatmentData.filter((item)=> {
                    if (searchText == ""){
                        return []
                    }else if (item.name.toLowerCase().includes(searchText.toLowerCase())){
                        return item
                    }
                }).map((item, key)=> {
                    return (
                        <Col key = {key}>
                            <Card className="h-100">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    height="200px"
                                    width="500px"
                                    style={{objectFit: "cover"}}/>                                                    <Card.Body className="d-flex flex-column">
                                <Card.Title className="d-flex mb-4">
                                    <span>{item.name} </span>
                                </Card.Title>
                                <Card.Text className="d-flex flex-column ">
                                    <span>{item.desc}</span>
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
                    )
                })}
            </Row>
        </div>
    )
}