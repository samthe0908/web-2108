import React from 'react';
import {Routes, Route} from "react-router-dom";
import {HomeView} from "./pages/HomeView"
import {MassageView} from "./pages/MassageView"
import {FaceTreatmentView} from "./pages/FaceTreatmentView"
import {MainNavbar} from "./components/Navbar/Navbar"
import {Footer} from "./components/Footer/Footer";
import {OfferView} from "./pages/OfferView";
import {AboutView} from "./pages/AboutView";
import {CartProvider} from "./context/CartContext";
import {TreatmentView} from "./pages/TreatmentView";


function App() {
    return (

         <CartProvider>
            <MainNavbar/>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/MassageView" element={<MassageView/>}/>
                     <Route path="/FaceTreatmentView" element={<FaceTreatmentView/>}/>
                    <Route path="/OfferView" element={<OfferView/>}/>
                    <Route path="/AboutView" element={<AboutView/>}/>
                    <Route path="/TreatmentView" element={<TreatmentView/>}/>
                </Routes>
            <Footer/>
        </CartProvider>

  )
}

export default App;
