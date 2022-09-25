import React from "react";
import css from "./Behandling.module.css";
import {Container, Row, Col, } from "react-bootstrap";
import erbjudandeItems from "../data/erbjudande.json"
import {ErbjudandeCard} from "../components/ErbjudandeCard";

export function Erbjudande() {

    return (
        <>
            <header className={css.erbjudande}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {erbjudandeItems.map(item=>(
                            <Col Key={item.id}>
                                <ErbjudandeCard{...item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}