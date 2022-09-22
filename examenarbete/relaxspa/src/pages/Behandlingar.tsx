import css from "./Behandling.module.css";
import {Container, Row, Col, } from "react-bootstrap";
import behandlingItems from "../data/behandlingItems.json"
import {BehandlingItem} from "../components/BehandlingItem";




export function Behandlingar() {

    return (
        <>
            <header className={css.behandling}/>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <Container style={{color: "#AE9A63"}}>
                    <Row md={2} xs={1} lg={4} >
                        {behandlingItems.map(item=>(
                            <Col Key={item.id}>
                                <BehandlingItem{...item}/>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </>
    )
}
