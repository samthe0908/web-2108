import {Container} from "react-bootstrap";
import css from "./Home.module.css"

export function Home(){
    return (
        <>
            <header className={css.home}/>
            <div className="p-5" style={{backgroundColor:"#D9D9D9"}}>
               <Container style={{color:"#AE9A63"}}>
                <h1> Ditt välmående i fokus</h1>
                   <h5>
                       Koppla av och återställ båda kropp och sinne
                       Vi erbjuder först klassisk Thaimassage som är en 2500 år gammal behandlingsform från Asien.
                       Den går ut på att ta tillvara kroppens energilinjer och sträcka ut musklerna så att kroppens egna endorfinflöde skapar en balans.
                       Thaimassagen bidrar till att lösa kroppens blockeringar vilket lösgör smärtor och värk.
                       Processen är mycket noggrann och exakt och passar alla från yngre till äldre.
                   </h5>
               </Container>
            </div>
        </>

    )
}
