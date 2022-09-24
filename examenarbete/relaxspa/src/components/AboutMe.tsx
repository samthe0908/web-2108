import React from "react";
import {useEffect} from "react";
import Vivus from "vivus";
import {motion} from "framer-motion";


export function AboutMe() {
    useEffect(()=>{
        new Vivus('about-title', {duration: 200, file:"svg/about_animated.svg"})
    },[])
    return(
        <div id="about-title" className="align-self-start" style={{width:"40rem", padding:"2rem"}}>
        </div>
    )
}

