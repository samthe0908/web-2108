import React from "react";
import css from "./AboutView.module.css";
import profileImage from "../img/samAuthor4.jpeg"
import {AboutMe} from "../components/AboutMe";
import {FaFacebookSquare, FaInstagramSquare, FaEnvelopeSquare,FaLinkedin,FaGithubSquare,FaTwitterSquare,FaCss3Alt, FaGitAlt, FaHtml5,FaJs,FaNodeJs,FaReact} from "react-icons/fa";
import {DiMongodb } from "react-icons/di"
import { SiTypescript} from "react-icons/si"


export function AboutView(){

    return(
        <>
            <header className={css.about}>
            <img className="rounded-3 align-self-end mx-auto "  style={{width:"10rem"}} src={profileImage} alt="samantha1"/>
                <div  className=" align-self-end mx-auto " ><AboutMe/></div>
                <div className={css.skill}>
                        <FaCss3Alt className={css.css3}/>
                        <FaGitAlt className={css.git}/>
                        <FaHtml5 className={css.html5} />
                        <FaJs className={css.js}/>
                        <FaNodeJs className={css.node}/>
                       <FaReact className={css.react}/>
                        <DiMongodb className={css.db}/>
                        <SiTypescript className={css.type}/>
                </div>
            </header>
            <div className="p-5" style={{backgroundColor: "#D9D9D9"}}>
                <p> Jag heter Samantha Theerawat, Jag är en nyutexaminerad fullstack webbutvecklare med en stor passion för programmering.</p>
                <p>Denna webbsida är en av de projekt jag gjort under min utbildning. Jag valde att inte implementera bokning funktion i projektet ännu, eftersom jag ansåg att projektet inte skulle bli klart i tid. </p>
                <p> Funktioner som finns: "KÖP-funktion" under ERBJUDANDE, samt "SÖK-funktion".  </p>
                <p>Jag utmanar mig själv på en högre nivå coh alltid försöker uppnå min bästa version.</p>
                <div className="text-center flex-row  mb-3">
                    <a className={css.twitt} href="https://twitter.com/SamanthaTh11"><FaTwitterSquare/></a>
                    <a className={css.github} href="https://github.com/samthe0908"><FaGithubSquare/></a>
                    <a className={css.linkin} href="https://www.linkedin.com/in/samantha-theerawat-b59438100/"><FaLinkedin/></a>
                    <a className={css.facebook}  href="https://www.facebook.com/samantha.theerawat"><FaFacebookSquare/></a>
                    <a className={css.instagram} href="https://www.instagram.com/nokiang_thee/"><FaInstagramSquare/></a>
                    <a className={css.mail} href="mailto:samanthathee0908@gmail.com"><FaEnvelopeSquare/></a>
                </div>
            </div>
        </>
    )
}