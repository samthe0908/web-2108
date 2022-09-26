import React from "react";
import {Offcanvas} from "react-bootstrap";

export function Cart(){
    return(
        <Offcanvas show = {true}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title> Varukorg </Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}