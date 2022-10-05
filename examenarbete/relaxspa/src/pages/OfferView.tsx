import React from "react";
import css from "./FaceTreatmentView.module.css";
import {Container, Row, Col, } from "react-bootstrap";
import offerItems from "../data/offer.json"
import {OfferCard} from "../components/OfferCard";

export function OfferView() {

    return (
        <>
            <header className={css.erbjudande}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {offerItems.map(item=>(
                            <Col Key={item.id}>
                                <OfferCard{...item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}