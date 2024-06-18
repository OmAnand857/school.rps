import CardComp from "./CardComp";
import Slider from "./Slider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import GallerySection from "./GallerySection";
function HomeSection(){
        return (    
            <>              

                        <div className="relative">

                                <Slider/>
                                                                <div class=" hidden lg:flex h-[40vh] w-[65vw]  absolute bottom-[-20%] left-[50%] translate-x-[-50%] z-[5]  justify-around">

                                <div class="flex flex-col items-center justify-around w-[30%] h-full shadow-xl">
                                    <img class="w-full h-[70%]" src="./Rectangle 5.png" alt=""></img>
                                <Link to="admissions"> <div class="flex flex-col items-center cursor-pointer">
                                        <h3 className="text-xl">Admissions</h3>
                                        <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                    </div></Link> 

                                </div>

                                <div class="flex flex-col items-center justify-around w-[30%] h-full shadow-xl">
                                    <img class="w-full h-[70%]" src="./image 4.png" alt=""></img>
                                <Link to="about">    <div class="flex flex-col items-center cursor-pointer">
                                        <h3 className="text-xl">About Us</h3>
                                        <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                    </div></Link>


                                                    </div>


                            <div class="flex flex-col items-center justify-around w-[30%] h-full shadow-xl">
                                <img class="w-full h-[70%]" src="./image 3.png" alt=""></img>
                            <Link to="/SchoolLife">  <div class="flex flex-col items-center cursor-pointer">
                                    <h3 className="text-xl">Facilities</h3>
                                    <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

                                </div></Link>

                            </div>


                            </div>


                               











                            <div  class=" w-[80vw] lg:w-[40vw] z-[5] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:top-[40%] lg:left-[39%] ">
            <p class=" text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto] text-white">Welcome to</p>
            <h1 class="text-[10vw] text-white font-bold mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Royal Public <br/> School <span class="text-[8vw] text-[#FE9132]">,</span> Raipur</h1>
            <div class='flex  text-white gap-[3vw] mt-[2vw]'><button class="bg-[#1B7242] p-[1vw] rounded">Get Started</button> <button class="bg-transparent border-white border-2 p-[1vw] rounded">Watch Video</button></div>
            
        </div>






                        </div>

























                    <div class="mt-[40px] lg:mt-[10vw] relative" >
                    <img class=" scroll-opacity hidden lg:block absolute top-[8%] h-[10vw] w-[18vw] left-[20%] object-contain" src="./Group 14.png" alt=""></img>
                            <div class="flex flex-col items-center">
                                
                                <h1 class="text-[#1B7242] my-[2vw] text-6xl leading-[150%] tracking-wide font-[Outfit] font-semibold">ABOUT US</h1>
                                <div class="lg:flex-row flex flex-col items-center w-4/5 lg:gap-4 gap-[4vw]">
                                    <div class=" scroll-animate   lg:w-2/4 p-2 md:p-4 rounded    hover:translate-y-[-10px]  transition-transform  shadow-[rgba(0,0,0,0.24)_0px_3px_8px] hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)] order- lg:order-0 w-full h-full flex flex-col justify-center items-center">
                                        <p class="text-xl font-[Open Sans]">School has been providing outstanding education and support to students across the globe. Amanora School is affiliated to the Central Board of Secondary Education (1130452), India. It follows MyPedia curriculum in Kindergarten and switches to CBSE for Grades 1 to 12, representing multiple ethnicities – making us a truly international community. We offer a blend of academic, cultural, technological and globally connected activities within a dynamic environment.</p>
                                        <button class=" rounded my-[20px]  text-center   bg-[#1B7242] text-[xl] h-[50px] w-[120px] text-white">View More</button>
                                    </div>
                                    <div class=" lg:w-2/4 w-full "><img src="https://static.vecteezy.com/system/resources/thumbnails/007/343/251/small_2x/school-building-in-flat-style-modern-school-college-building-illustration-vector.jpg" alt=""/></div>
                                </div>
                            </div>
                    </div>



                
                    <div class="flex flex-col items-center my-16 w-[100vw] relative">
                    <img   class="scroll-opacity hidden lg:block object-contain absolute top-[3.5vw] left-[65vw] h-[10vw] w-[10vw] "src="./Group 9.png" alt=""></img>
                            <h1  class="text-[#1B7242] text-center lg:my-[2vw] my-[4vw] text-6xl leading-[150%] tracking-wide font-[Outfit] font-semibold">DIRECTORS MESSAGE</h1>
                            <div class="flex lg:flex-row flex-col  gap-[4vw] lg:gap-4 items-center w-4/5">
                                <div class="  lg:w-2/4 w-full " >
                                        <img class="h-full w-full"  src="https://th.bing.com/th/id/R.84638a6215f41d78a6aca7e6ee425702?rik=KN9%2bpuqbjuPJVg&riu=http%3a%2f%2fwww.mca.k12.pa.us%2fwp%2fmcaes%2fwp-content%2fuploads%2fsites%2f3%2f2016%2f10%2fDSC04312-1080x718.jpg&ehk=KIl2pBrCeWihOP2olYxOT83rNWgOIzVCpg%2bYRK3zgEY%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
                                </div>
                                <div class=" scroll-animate-rev lg:w-2/4 w-full p-2 md:p-4  hover:translate-y-[-10px]  transition-transform shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded hover:shadow-[0_0_0_2px_rgba(27,114,66,1),0_10px_60px_0_rgba(0,0,0,.1)] flex flex-col items-center">
                                    <p class="text-xl  font-[Open Sans]">We, at RPS School are committed to providing a high-quality education for our students. We emphasise the importance of achieving personal standards of excellence in academic, sporting, cultural and recreational activities. The school combines excellent facilities with a progressive curriculum, proactive values teaching and high expectations of students in performance and behaviour.</p>
                                    <button class=" rounded my-[20px]  text-center   bg-[#1B7242] text-[xl] h-[50px] w-[120px] text-white">View More</button>                                </div>
                            </div>

                    </div> 

                    <GallerySection/>
                    
                   
                  
                        </>
        )                

}
export default HomeSection;