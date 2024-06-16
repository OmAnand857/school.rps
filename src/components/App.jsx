import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import HomeSection from "./HomeSection";
import Footer from "./Footer";
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
            <Footer/></>}></Route>
            <Route path="/about" element={<><Navbar/><About/><Footer/></>}></Route>
            <Route path="/admissions" element={<><Navbar/><Admissions/><Footer/></>}></Route>
            <Route path="/schoollife" element={<><Navbar/><SchoolLife/><Footer/></>}></Route>
            <Route path="/news" element={<><Navbar/><NewsUpdates/><Footer/></>}></Route>
            <Route path="/gallery" element ={<><Navbar/><Gallery/><Footer/></>}></Route>
            </Routes>
          
        </>
    )
}

export default App;