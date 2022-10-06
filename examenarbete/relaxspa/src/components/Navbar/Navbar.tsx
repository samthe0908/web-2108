import React, {useState} from "react";
import {Container,Navbar, Nav,  Modal} from "react-bootstrap";
import logo from "../../img/relaxspalogo1.png"
import {FaShoppingCart, FaSistrix} from "react-icons/fa";
import {useCart} from "../../context/CartContext";
import {SearchView} from "../../pages/SearchView";


export function MainNavbar(){
    const {openCart, cartQty} = useCart()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <Navbar expand="md"  sticky="top" style={{backgroundColor:"#131313"}}>
            <Container>
            <a className="navbar.brand active "   href="/" >
                <img className="mx-4"  src={logo} width="100"  alt ="logo-img"/>
            </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white", color:"#AE9A63d"}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/MassageView"  style={{color:"#AE9A63", fontSize:"large"}}>MASSAGE</Nav.Link>
                        <Nav.Link href="/FaceTreatmentView" style={{color:"#AE9A63", fontSize:"large"}}>BEHANDLINGAR</Nav.Link>
                        <Nav.Link href="/OfferView" style={{color:"#AE9A63", fontSize:"large"}}>ERBJUDANDE</Nav.Link>
                        <Nav.Link href="/AboutView" style={{color:"#AE9A63", fontSize:"large"}}>OM MIG</Nav.Link>
                        {/*<Nav.Link href="/SearchView" style={{color:"#AE9A63", fontSize:"large"}}>Alla</Nav.Link>*/}
                    </Nav>
                    <FaSistrix
                    style={{color:"#AE9A63", fontSize: "40px"}}
                    onClick={handleShow}
                    />
                </Navbar.Collapse>


                {cartQty > 0 && (<button onClick={openCart}
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
                    {cartQty}
                </div>
            </button>)}
            </Container>

            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{backgroundColor: "#D9D9D9", color: "#AE9A63", }}>
                    <img className="mx-5"  src={logo} width="60"  alt ="logo-img"/>
                    <h1> RELAXSPA Ditt välmående i fokus </h1>

                </Modal.Header>

                <Modal.Body  style={{backgroundColor: "#D9D9D9", color: "#AE9A63", textAlign: "center"}}>
                    <SearchView/>
                </Modal.Body>

            </Modal>
        </Navbar>

    )
}