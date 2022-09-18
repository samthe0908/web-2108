import {Container, Carousel, CarouselItem} from "react-bootstrap";
import css from "./Home.module.css"
import mainimage from "../img/main-imgjpg.jpg"
import aroma from "../img/aromastressbehandling_300x200.jpg"
import hotstone from "../img/hotstone.jpg"
import micronbeh from "../img/microneedlingb.jpg"
import olja from "../img/pexels-olja-4041392.jpg"
import fot from "../img/pexels-fot.jpg"
import monstera from "../img/pexels-monstera-6621367.jpg"

export function Home(){
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className={css.home}
                        src={mainimage} alt="mainimage"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={css.home}
                        src={monstera} alt="monstera"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={css.home}
                        src={aroma} alt="aromastress"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={css.home}
                        src={fot} alt="fotmassage"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={css.home}
                        src={olja} alt="olja"
                    />
                </Carousel.Item>
            </Carousel>
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
