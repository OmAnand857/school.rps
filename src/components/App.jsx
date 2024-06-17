import {React , useState , useEffect ,} from "react";
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


    const [scrollPosition, setScrollPosition] = useState(0);
    const [subBar , setSubBar] = useState(true);

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;



    useEffect(() => {
        window.addEventListener("scroll", handleSubNav);
      },[scrollPos]);


    const handleSubNav = () => {
        const position = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        setScrollPosition(position);
    
        if (scrollPosition > 100) {
          return setSubBar(false);
        } else if (scrollPosition < 100) {
          return setSubBar(true);
        }
      };

      useEffect(()=>{
            if(scrollPosition>100){
                console.log(document.querySelector(".subnav"));
                document.querySelector(".subnav").classList.remove("lg:flex");
                document.querySelector(".subnav").classList.add("lg:hidden");
                document.querySelector(".infinity").classList.add("hidden");

                        document.querySelector("body").classList?.remove("mt-[160px]");
                        document.querySelector("body").classList.add("mt-[80px]");
                        
                        document.querySelector(".navbar").classList.remove("lg:top-[80px]");
                        document.querySelector(".navbar").classList.remove("top-[40px]")
                        document.querySelector(".navbar").classList.add("top-0");
            }
        else{
            document.querySelector(".subnav").classList.remove("lg:hidden");
            document.querySelector(".subnav").classList.add("lg:flex");
            document.querySelector(".infinity").classList.remove("hidden");
            
            document.querySelector("body").classList.remove("mt-[80px]");
            document.querySelector("body").classList.add("lg:mt-[160px]");
            document.querySelector("body").classList.add("mt-[120px]");

            document.querySelector(".navbar").classList.remove("lg:top-0"); 
            document.querySelector(".navbar").classList.add("lg:top-[80px]");
            document.querySelector(".navbar").classList.add("top-[40px]");
                       


        }


      },[scrollPosition])























    return (
        <>
            <Routes>
                <Route path="/" element={<> 
                    <SubNavBar/>
                    <InfinitySlider/>
                    <Navbar scroll={setScrollPosition}/>
            
            <HomeSection/>
            <Acheivements/>
            <HallOfFame/>
            <Testimonial/>
            <Contact/>
            <Footer1/></>}></Route>
            <Route path="/about" element={<><SubNavBar/><InfinitySlider/>  <Navbar scroll={setScrollPosition}/><About/><Footer1/></>}></Route>
            <Route path="/admissions" element={<> <SubNavBar/><InfinitySlider/><Navbar scroll={setScrollPosition}/><Admissions/><Footer1/></>}></Route>
            <Route path="/schoollife" element={<> <SubNavBar/><InfinitySlider/><Navbar scroll={setScrollPosition}/><SchoolLife/><Footer1/></>}></Route>
            <Route path="/news" element={<> <SubNavBar/><InfinitySlider/><Navbar scroll={setScrollPosition}/><NewsUpdates/><Footer1/></>}></Route>
            <Route path="/gallery" element ={<> <SubNavBar/><InfinitySlider/><Navbar scroll={setScrollPosition}/><Gallery/><Footer1/></>}></Route>
            </Routes>
          
        </>
    )
}

export default App;