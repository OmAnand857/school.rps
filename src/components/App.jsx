import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import HomeSection from "./HomeSection";
import Footer from "./Footer";
import Footer1 from "./Footer1";
import Testimonial from "./Testimonial";
import About from "./About";
import {  Routes, Route } from "react-router-dom";
import Admissions from "./Admissions";
import SchoolLife from "./SchoolLife";
import NewsUpdates from "./NewsUpdates";
import Gallery from "./Gallery";
import Acheivements from "./Acheivements";
import HallOfFame from "./HallOfFame";
import SubNavBar from "./SubNavBar";
import InfinitySlider from "./InfinitySlider";
import Contact from "./Contact";


function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<> 
                    <SubNavBar/>
                    <InfinitySlider/>
                    <Navbar/>
            
            <HomeSection/>
            <Acheivements/>
            <HallOfFame/>
            <Testimonial/>
            <Contact/>
            <Footer1/></>}></Route>
            <Route path="/about" element={<><Navbar/><About/><Footer1/></>}></Route>
            <Route path="/admissions" element={<><Navbar/><Admissions/><Footer1/></>}></Route>
            <Route path="/schoollife" element={<><Navbar/><SchoolLife/><Footer1/></>}></Route>
            <Route path="/news" element={<><Navbar/><NewsUpdates/><Footer1/></>}></Route>
            <Route path="/gallery" element ={<><Navbar/><Gallery/><Footer1/></>}></Route>
            </Routes>
          
        </>
    )
}

export default App;