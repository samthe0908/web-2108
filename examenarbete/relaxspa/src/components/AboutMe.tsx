import React from "react";
import {useEffect} from "react";
import Vivus from "vivus";
// import {motion} from "framer-motion";
// import image from "./svg/fullstack_animated.svg"

export function AboutMe() {
    useEffect(()=>{
        new Vivus('about-title', {duration: 100, file:"svg/fullstack_animated.svg"})
    },[])
    return(
        <div id="about-title" className="align-self-start" style={{width:"40rem", padding:"2rem"}}>
        </div>
    )
}

