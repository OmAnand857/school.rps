import { useRef ,useState } from "react";
import CardComp from "./CardComp";
import Slider from "./Slider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import GallerySection from "./GallerySection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";



function HomeSection(){

    const [scrollPosition, setScrollPosition] = useState(0);



//gsap animation logic
gsap.registerPlugin(useGSAP,ScrollTrigger);
const animationContainer1 = useRef();
const animationContainer2 = useRef();


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
        y:20,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:0.75,
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























        return (    
            <>              

                        <div className="relative" >

                        <Navbar scroll={setScrollPosition}/>





                                <Slider/>
                                                                <div className=" hidden lg:flex h-[40vh] w-[65vw]  absolute bottom-[-20%] left-[50%] translate-x-[-50%] z-[5]  justify-around">

                                <div className="  flex flex-col items-center gap-4 w-[30%] h-full shadow-xl">
                                    <img className="w-full h-[70%]" src="./Rectangle 5.png" alt=""></img>
                                <Link to="admissions"> <div className="flex flex-col items-center cursor-pointer">
                                        <h3 className="text-xl">Admissions</h3>
                                        <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                    </div></Link> 

                                </div>

                                <div className=" flex flex-col items-center gap-4 w-[30%] h-full shadow-xl">
                                    <img className="w-full h-[70%]" src="./image 4.png" alt=""></img>
                                <Link to="about">    <div className="flex flex-col items-center cursor-pointer">
                                        <h3 className="text-xl">About Us</h3>
                                        <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                    </div></Link>


                                                    </div>


                            <div className=" flex flex-col items-center gap-4 w-[30%] h-full shadow-xl">
                                <img className="w-full h-[70%]" src="./image 3.png" alt=""></img>
                            <Link to="/SchoolLife">  <div className="flex flex-col items-center cursor-pointer">
                                    <h3 className="text-xl">Facilities</h3>
                                    <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                </div></Link>

                            </div>


                            </div>


                               











                            <div  className=" w-[80vw] lg:w-[40vw] z-[5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:top-[40%] lg:left-[39%] ">
            <p className=" text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto] text-white">Welcome to</p>
            <h1 className="text-[10vw] text-white font-bold mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Royal Public <br/> School <span className="text-[8vw] text-[#FE9132]">,</span> Raipur</h1>
            <div className='flex  text-white gap-[3vw] mt-[2vw]'><button className="bg-[#1B7242] p-[1vw] rounded">Get Started</button> <button className="bg-transparent border-white border-2 p-[1vw] rounded">Watch Video</button></div>
            
        </div>






                        </div>

























                    <div ref={animationContainer1} className=" mt-[40px] lg:mt-[10vw] w-[100vw] relative" >
                    <img className="  hidden lg:block absolute top-[8%] h-[10vw] w-[18vw] left-[20%] object-contain" src="./Group 14.png" alt=""></img>
                            <div className=" flex flex-col items-center">
                                
                                <h1 className=" text-[#1B7242] my-[2vw] text-3xl md:text-6xl leading-[150%] tracking-wide font-[Outfit] font-semibold">ABOUT US</h1>
                                <div className="  lg:flex-row flex flex-col items-center w-4/5 lg:gap-4 gap-[4vw]">
                                    <div className=" order-1 lg:order-0 scrollanimate   lg:w-2/4 p-2 md:p-4 rounded    hover:translate-y-[-10px]  shadow-[rgba(0,0,0,0.24)_0px_3px_8px] hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)]  w-full h-full flex flex-col justify-center items-center">
                                        <p className="text-xl font-[Open Sans]">School has been providing outstanding education and support to students across the globe. Amanora School is affiliated to the Central Board of Secondary Education (1130452), India. It follows MyPedia curriculum in Kindergarten and switches to CBSE for Grades 1 to 12, representing multiple ethnicities – making us a truly international community. We offer a blend of academic, cultural, technological and globally connected activities within a dynamic environment.</p>
                                        <button className=" rounded my-[20px]  text-center   bg-[#1B7242] text-[xl] h-[50px] w-[120px] text-white">View More</button>
                                    </div>
                                    <div className="lg:order-1  scrollanimaterev lg:w-2/4 w-full "><img src="https://www.amanoraschool.edu.in/public/uploads/2023/1691128498-64cc92b292d66.jpg" alt=""/></div>
                                </div>
                            </div>
                    </div>



                
                    <div ref={animationContainer2} className="flex flex-col items-center my-16 w-[100vw]  relative">
                    <img   className=" hidden lg:block object-contain absolute top-[3.5vw] left-[65vw] h-[10vw] w-[10vw] "src="./Group 9.png" alt=""></img>
                            <h1  className="textanimate text-[#1B7242] text-center lg:my-[2vw] my-[4vw] text-3xl md:text-6xl leading-[150%] tracking-wide font-[Outfit] font-semibold">DIRECTORS MESSAGE</h1>
                            <div className="flex lg:flex-row flex-col  gap-[4vw] lg:gap-4 items-center w-4/5">
                                <div className="scrollanimate  lg:w-2/4 w-100vw " >
                                        <img className=" h-[100%] w-[100%]"  src="https://th.bing.com/th/id/R.84638a6215f41d78a6aca7e6ee425702?rik=KN9%2bpuqbjuPJVg&riu=http%3a%2f%2fwww.mca.k12.pa.us%2fwp%2fmcaes%2fwp-content%2fuploads%2fsites%2f3%2f2016%2f10%2fDSC04312-1080x718.jpg&ehk=KIl2pBrCeWihOP2olYxOT83rNWgOIzVCpg%2bYRK3zgEY%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
                                </div>
                                <div className=" scrollanimaterev lg:w-2/4 w-full p-2 md:p-4  hover:translate-y-[-10px]   shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)] flex flex-col items-center">
                                    <p className="text-xl  font-[Open Sans]">We, at RPS School are committed to providing a high-quality education for our students. We emphasise the importance of achieving personal standards of excellence in academic, sporting, cultural and recreational activities. The school combines excellent facilities with a progressive curriculum, proactive values teaching and high expectations of students in performance and behaviour.</p>
                                    <button className=" rounded my-[20px]  text-center   bg-[#1B7242] text-[xl] h-[50px] w-[120px] text-white">View More</button>                                </div>
                            </div>

                    </div> 

                    <GallerySection/>
                    
                   
                  
                        </>
        )                

}
export default HomeSection;