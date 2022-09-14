import logo from "../img/relaxspalogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



export function Footer(){
    return(
    <footer style={{backgroundColor:"#131313"}}>

        <div className="row">
            <div className= "col d-grid justify-content-center" >
                <img src={logo} width="80" className="rounded-circle" style={{margin:"30px"}} alt ="logo-img"/>
            </div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-center ">
                <a  href="#"><FaFacebookSquare/></a>
                <a  href="#"><FaInstagramSquare/></a>
            </div>
        </div>
        <div className="row">
            <div className="col text-center "  style={{color:"#AE9A63"}}>
                    <h5> Kropp & Själ RelaxSpa </h5>
                    <p>gatuadress</p>
                    <p>postnummer ort</p>
                    <p>telnummer</p>
                    <p> email</p>
            </div>
            <div className="col text-center " style={{color:"#AE9A63"}}>
                    <h5> Öppettider </h5>
                    <p>måndag</p>
                    <p>tisdag</p>
                    <p>onsdag</p>

            </div>

        </div>
    </footer>
    )
}