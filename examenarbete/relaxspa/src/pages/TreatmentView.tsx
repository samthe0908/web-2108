import React, {useState} from "react";
import css from "./MassageView.module.css";
import {Col, Container, Form, Row} from "react-bootstrap";
import treatmentData from "../data/treatment.json"
import {SearchCard} from "../components/SearchCard";


export function TreatmentView(){
    const [searchText, setSearchText ]= useState("treatmentData")
    const onSearchChange = (value) => {
        const newSearchText = treatmentData.filter((searchData)=>
            searchData.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            searchData.desc.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
        setSearchText(newSearchText)
    }

    return(
        <>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row className="mb-4">
                        <Form>
                            <Form.Control
                                size="lg"
                                className="d-fle"
                                id="searchInput"
                                type="search"
                                placeholder= "sök"
                                aria-label="Search"
                                onChange={event => onSearchChange(event.target.value)}
                            />
                        </Form>
                    </Row>
                    <Row md={2} xs={1} lg={4} >
                        {searchText.map((item) =>(
                            <Col>
                                <SearchCard{...item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>


    )
}