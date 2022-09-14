import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../img/relaxspalogo.png"
//import css from "../Navbar/Navbar.module.css"


export function Navbar(){
    return(
    <NavbarBs style={{backgroundColor:"#131313"}}>
       <Container>
           <Nav className="me-auto ">
               <Nav.Link className="navbar-brand" to="/" as ={NavLink}>
                   <img src={logo} width="100" className="rounded-circle" alt ="logo-img"/>
               </Nav.Link>
               <Nav.Link className="mt-5" style={{color:"#AE9A63"}} to="/Massage" as ={NavLink}>

                   MASSAGE
               </Nav.Link>
               <Nav.Link className="mt-5" style={{color:"#AE9A63"}} to="/Behandlingar" as ={NavLink}>
                   BEHANDLINGAR
               </Nav.Link>
               <Nav.Link className="mt-5"  style={{color:"#AE9A63"}} to="/" as ={NavLink}>
                   ERBJUDANDE
               </Nav.Link>
               <Nav.Link className="mt-5" style={{color:"#AE9A63"}} to="/" as ={NavLink}>
                   OM OSS
               </Nav.Link>
           </Nav>
           <button> boka </button>
       </Container>
    </NavbarBs>
    )
}