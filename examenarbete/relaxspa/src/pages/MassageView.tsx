
import React from "react";
import css from "./MassageView.module.css";
import {Col, Container, Row} from "react-bootstrap";
import treatmentData from "../data/treatment.json"
import {MassageCard} from "../components/MassageCard";


export function MassageView(){
    const treatmentSearchItem =  treatmentData.filter(item => item.cat == "M")
    return(
        <>
            <header className={css.massage}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {treatmentSearchItem.map(item=>
                            <Col Key={item.id}>
                                <MassageCard{...item}/>
                            </Col>
                        )}

                    </Row>
                </Container>
            </div>
        </>


    )
}