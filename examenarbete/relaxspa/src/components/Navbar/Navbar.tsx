import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Navbar(){
    return(
    <NavbarBs style={{backgroundColor:"#131313"}}>
       <Container>
           <Nav className="me-auto ">
               <Nav.Link style={{color:"#AE9A63"}} to="/" as ={NavLink}>
                   HOME
               </Nav.Link>
               <Nav.Link style={{color:"#AE9A63"}} to="/Massage" as ={NavLink}>
                   MASSAGE
               </Nav.Link>
               <Nav.Link style={{color:"#AE9A63"}} to="/Behandlingar" as ={NavLink}>
                   BEHANDLINGAR
               </Nav.Link>
               <Nav.Link style={{color:"#AE9A63"}} to="/" as ={NavLink}>
                   ERBJUDANDE
               </Nav.Link>
               <Nav.Link style={{color:"#AE9A63"}} to="/" as ={NavLink}>
                   OM OSS
               </Nav.Link>
           </Nav>
           <button> boka </button>
       </Container>
    </NavbarBs>
    )
}