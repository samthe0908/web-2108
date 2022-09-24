import React from "react";
import {Container,Navbar, Nav, Form, Button} from "react-bootstrap";
import logo from "../../img/relaxspalogo1.png"
import {FaShoppingCart} from "react-icons/fa";


export function MainNavbar(){
    return(
        <Navbar expand="md"  sticky="top" style={{backgroundColor:"#131313"}}>
            <Container>
            <a className="navbar.brand " href="/" >
                <img className="mx-4"  src={logo} width="100"  alt ="logo-img"/>
            </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white", color:"#AE9A63d"}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/Massage"  style={{color:"#AE9A63", fontSize:"large"}}>MASSAGE</Nav.Link>
                        <Nav.Link href="/Behandlingar" style={{color:"#AE9A63", fontSize:"large"}}>BEHANDLINGAR</Nav.Link>
                        <Nav.Link href="/Erbjudande" style={{color:"#AE9A63", fontSize:"large"}}>ERBJUDANDE</Nav.Link>
                        <Nav.Link href="/About" style={{color:"#AE9A63", fontSize:"large"}}>OM MIG</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Sök"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark" style={{color:"#AE9A63", backgroundColor:"#131313", fontSize:"large"}}>SÖK</Button>
                    </Form>
                    <button
                        style={{width:"4rem", height:"4em", position:"relative"}}
                        className="rounded-circle mx-3"
                    >
                        <FaShoppingCart style={{fontSize:"35px", color:"#AE9A63"}}/>
                        <div className="rounded-circle bg-danger d-flex justify-content-center  align-items-center"
                        style={{
                            color:"white",
                            width:"1.5rem",
                            height:"1.5rem",
                            position:"absolute",
                            bottom: 0,
                            right:0,
                            transform:"translate(25%, 25%)",
                        }}
                        >
                            3
                        </div>
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}