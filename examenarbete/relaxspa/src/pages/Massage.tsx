import css from "./Massage.module.css";
import {Container, Row, Col} from "react-bootstrap";
import massageItems from "../data/items.json"




export function Massage(){
    return(
        <>
        <header className={css.massage}/>
            <div className="p-5" style={{backgroundColor:"#D9D9D9"}}>
                <Container style={{color:"#AE9A63"}}>
                </Container>
            </div>


            <Row md={2} xs={1} lg={4} className="g-3">
                {massageItems.map(item=>(
                    <Col key={item.id}>
                        <MassagItem{...item}/>
                    </Col>
                ))}

            </Row>
        </>
    )
}