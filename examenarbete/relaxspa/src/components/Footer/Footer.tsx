import logo from "../../img/relaxspalogo1.png";
import { FaFacebookSquare, FaInstagramSquare  } from "react-icons/fa";
import css from "./Footer.module.css"
import {Col, Row} from "react-bootstrap";



export function Footer(){
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
        <Row xs={1} lg={4}>
            <Col> </Col>
            <Col className="col text-center  "  style={{color:"#AE9A63"}}>
                    <h5> KROPP & SJÄL RELAXSPA </h5>
                    <p>gatuadress</p>
                    <p>postnummer ort</p>
                    <p>telnummer</p>
                    <p> email</p>
            </Col>
            <Col className="col text-center " style={{color:"#AE9A63"}}>
                    <h5> ÖPPETTIDER </h5>
                    <p>måndag - torsdag 09 - 20</p>
                    <p>fredag - lördag  09 - 18</p>
                    <p>söndag och helgdag 11 - 18</p>
                    <p> Se avvikande öppettider HÄR </p>
            </Col>
            <Col> </Col>

        </Row>
    </footer>
    )
}