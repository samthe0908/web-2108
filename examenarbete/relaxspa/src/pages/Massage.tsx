import css from "./Massage.module.css";
import {Container, Row, Col, } from "react-bootstrap";
import massageItems from "../data/items.json"
import {MassageItem} from "../components/MassageItem";




export function Massage(){
    return(
        <>
            <header className={css.massage}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {massageItems.map(item=>(
                            <Col Key={item.id}>
                                <MassageItem{...item}/>
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
        </>
    )
}