
import logo from "../../img/relaxspalogo1.png";
import { FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa";
import css from "./Footer.module.css"
import {Button, Col, Modal, Row} from "react-bootstrap";
import React, { useState } from 'react';



export function Footer(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <footer style={{backgroundColor:"#131313"}}>
        <Row>
            <div className= "col d-grid justify-content-center" >
                <img src={logo} width="80"  style={{marginTop:"10px", marginBottom:"5px"}} alt ="logo-img"/>
            </div>
        </Row>
        <Row>
            <div className="col d-flex justify-content-center ">
                <a className={css.facebook}  href="#"><FaFacebookSquare/></a>
                <a className={css.instagram} href="#"><FaInstagramSquare/></a>
            </div>
        </Row>
        <Row xs={1} lg={4} >
            <Col> </Col>
            <Col className="col text-center mb-5"  style={{color:"#AE9A63"}}>
                    <h5> KROPP & SJÄL RELAXSPA </h5>
                    <p>gatuadress</p>
                    <p>postnummer ort</p>
                    <p>telnummer</p>
                    <p> email</p>
            </Col>
            <Col className="col text-center mb-5"  style={{color:"#AE9A63"}}>
                    <h5> ÖPPETTIDER </h5>
                    <p>måndag - torsdag 09 - 20</p>
                    <p>fredag - lördag  09 - 18</p>
                    <p>söndag och helgdag 11 - 18</p>
                    <Button className="fs-6"
                            style={{
                                backgroundColor:"#131313",
                                color:"#AE9A63",
                                borderColor:"#AE9A63",
                            }}
                                onClick={handleShow}>
                        se avvikande öppettider här
                    </Button>
            </Col>
            <Col> </Col>
        </Row>


            <Modal
            size="sm"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header className="p-3" closeButton style={{color: "#AE9A63"}}>
                <Modal.Title >Avvikande öppettider</Modal.Title>
            </Modal.Header>
            <Modal.Body className="fs-5" style={{backgroundColor: "#D9D9D9", color: "#AE9A63", textAlign: "center"}}>
                <p> Nyårsdagen stängt</p>
                <p> Midsommarafton stängt</p>
                <p> Midsommardagen stängt</p>
                <p> Julafton stängt</p>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#131313", color: "#AE9A63", justifyContent:"center" }} >
                <h3 >TREVLIG HELG</h3>
            </Modal.Footer>
        </Modal>

    </footer>
    )
}