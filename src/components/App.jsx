import {React , useState , useEffect ,useRef} from "react";
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
import {CountUp} from "countup.js";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Testimonial1 from "./Testimonial1";
import ThreeDSlide from "./3DSlide";

function App(){


    const [scrollPosition, setScrollPosition] = useState(0);
    const [subBar , setSubBar] = useState(true);

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    var height = window.innerHeight;


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
        if(scrollPosition>height/2){
           
          document.querySelector(".navbar").classList.add("fixed");
          document.querySelector(".navbar").classList.remove("absolute")
          document.querySelector(".navbar").classList.add("bg-[#1B7242]");
          document.querySelector(".navbar").classList.remove("text-black")
          document.querySelector(".navbar").classList.remove("bg-transparent");
        }
    else{

      document.querySelector(".navbar").classList.remove("fixed");
      document.querySelector(".navbar").classList.add("absolute")
      document.querySelector(".navbar").classList.remove("bg-[#1B7242]");
      document.querySelector(".navbar").classList.add("text-black")
      document.querySelector(".navbar").classList.add("bg-transparent");
      
                   
    }


  },[scrollPosition])
  










//counter logic
useEffect(()=>{
  var countOptions = {
  useEasing: true,
  duration:4,
  separator: '',
  enableScrollSpy:true,
  scrollSpyOnce:true,
  smartEasingThreshold:500,
  smartEasingAmount:50,
  suffix:"+"
}
var countUp = new CountUp('teachers',100,countOptions)
var countUp = new CountUp('students',5000,countOptions)
var countUp = new CountUp('awards',50,countOptions)
if (!countUp.error) {
  countUp.start();
} else {
  console.error(countUp.error);
}
},[])

//scroll animation logic with gsap;





















    return (
        <>
        
         <Navbar scroll={setScrollPosition}/>


            <Routes>
                <Route path="/" element={<>  
            <HomeSection/>
            <Acheivements/>
            <HallOfFame/>
            <Testimonial1/>
            <Contact/>
            </>}>
            </Route>

            <Route path="/about" element={<><About/></>}></Route>
            <Route path="/admissions" element={<><Admissions/></>}></Route>
            <Route path="/schoollife" element={<><SchoolLife/></>}></Route>
            <Route path="/news" element={<><NewsUpdates/></>}></Route>
            <Route path="/gallery" element ={<><Gallery/></>}></Route>

            </Routes>

            <Footer1/>
          
        </>
    )
}

export default App;