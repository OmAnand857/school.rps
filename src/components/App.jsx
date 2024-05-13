import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import HomeSection from "./HomeSection";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<>  <Navbar/>
            <Slider/>
            <HomeSection/>
            <Testimonial/>
            <Footer/></>}></Route>
            <Route path="/about" element={<><Navbar/><About/></>}></Route>
            </Routes>
          
        </>
    )
}

export default App;