import React from "react";
import css from "./FaceTreatmentView.module.css";
import {Container, Row, Col, } from "react-bootstrap";
import treatmentData from "../data/treatment.json"
import {FaceTreatmentCard} from "../components/FaceTreatmentCard";



export function FaceTreatmentView() {
    const treatmentSearchItem =  treatmentData.filter(item => item.cat == "F")
    return (
        <>
            <header className={css.faceTreatment}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {treatmentSearchItem.map(item=>(
                            <Col Key={item.id}>
                                <FaceTreatmentCard{...item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}
