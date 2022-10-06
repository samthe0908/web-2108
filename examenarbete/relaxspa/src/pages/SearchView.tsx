import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import treatmentData from "../data/treatment.json"
import {SearchCard} from "../components/SearchCard";

export function SearchView(){
    const [searchText, setSearchText ]= useState("")
    const [data, setData ]= useState(treatmentData)


    const onSearchChange = (value: string) => {
        const newSearchText = treatmentData.filter((searchData)=>
            searchData.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            // searchData.desc.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
        setSearchText(value)
        setData(newSearchText)

    }

    return(
        <>
            <div  style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row className="mb-4 mt-1 ">
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
                    <Row xs={1} lg={2} >
                        {searchText=="" ||
                            data.map((item) =>(
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
