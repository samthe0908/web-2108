import {Container,Navbar, Nav, Form, Button} from "react-bootstrap";
import logo from "../../img/relaxspalogo1.png"
import css from "./Navbar.module.css"
import {FaShoppingCart} from "react-icons/fa";


export function MainNavbar(){
    return(
        <Navbar expand="md"  sticky="top" style={{backgroundColor:"#131313"}}>
            <Container>
            <a className="navbar.brand " href="/" >
                <img  src={logo} width="100"  alt ="logo-img"/>
            </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white", color:"#AE9A63d"}} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="/Massage" /*className={css.link}*/ style={{color:"#AE9A63", fontSize:"large"}}>MASSAGE</Nav.Link>
                        <Nav.Link href="/Behandlingar" style={{color:"#AE9A63", fontSize:"large"}}>BEHANDLINGAR</Nav.Link>
                        <Nav.Link href="/#" style={{color:"#AE9A63", fontSize:"large"}}>ERBJUDANDE</Nav.Link>
                        <Nav.Link href="/#" style={{color:"#AE9A63", fontSize:"large"}}>OM OSS</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
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