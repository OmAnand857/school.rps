import { useEffect, useRef ,useState } from "react";
import CardComp from "./CardComp";
import Slider from "./Slider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import GallerySection from "./GallerySection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import { Typewriter } from 'react-simple-typewriter'
import BannerCard from "./BannerCard";
import Form from "./Form";

function HomeSection(){

    const [scrollPosition, setScrollPosition] = useState(0);
    const [width , setWidth] = useState();

   useEffect(()=>{
     setWidth(window.innerWidth);
        return width;
   },[]) 
    window.addEventListener("resize",function (){
        setWidth(window.innerWidth);
        return width;
    })

    const words = ["Learning", "Growing", "Exploring", "Achieving", "Dreaming"];

//gsap animation logic
gsap.registerPlugin(useGSAP,ScrollTrigger);
const animationContainer1 = useRef();
const animationContainer2 = useRef();
const textContainer = useRef();


useGSAP(()=>{

    gsap.fromTo(".scrollanimate",{
        x:-400,
        opacity:0,
        
    },
    {
        x:0,
        opacity:1,
        duration:0.5,
        ease:"power1.out",
        scrollTrigger:{
            //markers:true,
            trigger:".scrollanimate",
            start:"top 80%",
            end:"top 50%",
        }
        


    })

    gsap.fromTo(".textanimate",{
        y:20,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:0.75,
        scrollTrigger:{
           //markers:true,
            trigger:".textanimate",
            start:"top 80%",
            end:"top 50%",
        }
    })

    gsap.fromTo(".scrollanimaterev",{
        x:400,
        opacity:0,
        
    },
    {
        x:0,
        opacity:1,
        duration:0.5,
        ease:"power1.out",
        scrollTrigger:{
            //markers:true,
            trigger:".scrollanimaterev",
            start:"top 80%",
            end:"top 50%",
        }
        


    })



},{scope:animationContainer1});

useGSAP(()=>{

    gsap.fromTo(".scrollanimaterev",{
        x:400,
        opacity:0,
        
    },
    {
        x:0,
        opacity:1,
        duration:0.5,
        ease:"power1.out",
        scrollTrigger:{
            //markers:true,
            trigger:".scrollanimaterev",
            start:"top 80%",
            end:"top 50%",
        }
        


    })

    gsap.fromTo(".textanimate",{
        y:100,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:0.75,
        ease:"power1.out",
        scrollTrigger:{
           // markers:true,
            trigger:".textanimate",
            start:"top 80%",
            end:"top 50%",
        }
    })

    gsap.fromTo(".scrollanimate",{
        x:-400,
        opacity:0,
        
    },
    {
        x:0,
        opacity:1,
        duration:0.5,
        ease:"power1.out",
        scrollTrigger:{
           // markers:true,
            trigger:".scrollanimate",
            start:"top 80%",
            end:"top 50%",
        }
        


    })


},{scope:animationContainer2});

useGSAP(()=>{
    gsap.fromTo(".textanimate1",{
        y:20,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:0.75,
       stagger:0.2,
       ease:"power1.out",
       delay:1.5
    })

},{scope:textContainer});























        return (    
            <>              

                        <div className="relative " >




                                {width>1024?<Form/>:null}

                                <Slider/>
                                                                                     
            
                                <div ref={textContainer}  className=" w-[80vw]  z-[5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
            <p className="textanimate1 text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Open Sans] text-white">Welcome to</p>
            <h1 className=" textanimate1 text-[10vw] text-white font-bold mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Royal Public  School <span className="text-[8vw] text-[#FE9132]">,</span> Raipur</h1>
            <p className="textanimate1 text-[5vw] md:text-[3vw] lg:text-[2vw] font-[Open Sans] text-white">where every child's journey is filled with { " "} 
            <span className="text-[#FE9132] text-[3xl] :text-5xl">
            <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={70}
            delaySpeed={1000}
          />
            </span>
            </p>
            <div className='flex  text-white gap-[10px] mt-[2vw]'><button className="bg-[#1B7242] h-[40px] w-[120px] rounded">Get Started</button> <button className="bg-transparent border-white border-2 h-[40px] w-[120px] rounded">Watch Video</button></div>
            
        </div>






                        </div>
                    
                    {width<1024?<Form/>:null}

























                    <div ref={animationContainer1} className=" mt-[40px]  w-[100vw] relative" >
                    <img  className="  hidden lg:block absolute top-[5%] h-[10vw] w-[18vw] left-[25%] object-contain" src="./Group 14.png" alt=""></img>
                            <div className="flex flex-col items-center">
                                
                                <h1 className=" text-[#1B7242] my-[2vw] text-3xl md:text-5xl tracking-wide font-[Outfit] font-semibold">ABOUT US</h1>
                                <div className="  lg:flex-row flex flex-col items-center w-4/5 lg:gap-4 gap-[4vw]">
                                    <div className=" order-1 lg:order-0 scrollanimate   lg:w-2/4 p-2 md:p-4 rounded    hover:translate-y-[-10px]  shadow-[rgba(0,0,0,0.24)_0px_3px_8px] hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)]  w-full h-full flex flex-col justify-center items-center">
                                        <p className="text-xl font-[Open_Sans]">School has been providing outstanding education and support to students across the globe. Amanora School is affiliated to the Central Board of Secondary Education (1130452), India. It follows MyPedia curriculum in Kindergarten and switches to CBSE for Grades 1 to 12, representing multiple ethnicities – making us a truly international community. We offer a blend of academic, cultural, technological and globally connected activities within a dynamic environment.</p>
                                        <button className=" rounded my-[20px]  text-center   bg-[#1B7242] text-[xl] h-[50px] w-[120px] text-white">View More</button>
                                    </div>
                                    <div className="lg:order-1   scrollanimaterev lg:w-2/4 w-full "><img class="rounded" src="https://www.amanoraschool.edu.in/public/uploads/2023/1691128498-64cc92b292d66.jpg" alt=""/></div>
                                </div>
                            </div>
                    </div>



                
                    <div ref={animationContainer2} className=" bg-[rgb(51,158,102)] py-16 flex flex-col gap-[30px] items-center my-16 w-[100vw]  relative">
                    <img   className="textanimate hidden lg:block object-contain absolute top-[3.5vw] left-[60vw] h-[10vw] w-[10vw] "src="./Group 9.png" alt=""></img>
                            <h1  className="textanimate text-white text-center  text-3xl md:text-5xl  tracking-wide font-[Outfit] font-semibold">DIRECTORS MESSAGE</h1>
                            <div className="flex lg:flex-row flex-col  gap-[4vw] lg:gap-4 items-center w-4/5">
                                <div className="textanimate  lg:w-2/4 w-100vw " >
                                        <img className=" h-[100%] rounded w-[100%]"  src="https://th.bing.com/th/id/R.84638a6215f41d78a6aca7e6ee425702?rik=KN9%2bpuqbjuPJVg&riu=http%3a%2f%2fwww.mca.k12.pa.us%2fwp%2fmcaes%2fwp-content%2fuploads%2fsites%2f3%2f2016%2f10%2fDSC04312-1080x718.jpg&ehk=KIl2pBrCeWihOP2olYxOT83rNWgOIzVCpg%2bYRK3zgEY%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
                                </div>
                                <div className=" textanimate lg:w-2/4 w-full p-2 md:p-4  hover:translate-y-[-10px]    rounded hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)] flex flex-col items-center">
                                    <p className="text-xl text-white  font-[Open_Sans]">We, at RPS School are committed to providing a high-quality education for our students. We emphasise the importance of achieving personal standards of excellence in academic, sporting, cultural and recreational activities. The school combines excellent facilities with a progressive curriculum, proactive values teaching and high expectations of students in performance and behaviour.</p>
                                    <button className=" rounded my-[20px]  text-center   bg-white text-[xl] h-[50px] w-[120px] border-black border-2 text-black">View More</button>                                </div>
                            </div>

                    </div> 

                    <GallerySection/>
                    
                   
                  
                        </>
        )                

}
export default HomeSection;