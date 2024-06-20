import {React , useRef} from "react";
import TeacherCarousel from "./TeacherCarousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About(){



        //gsap logic

        gsap.registerPlugin(useGSAP,ScrollTrigger);
        const animationContainer3 = useRef();


        useGSAP(()=>{

            gsap.fromTo(".scrollanimate",{
                x:-400,
                opacity:0,
                
            },
            {
                x:0,
                opacity:1,
                duration:1,
                ease:"power1.out",
                scrollTrigger:{
                    markers:true,
                    trigger:".scrollanimate",
                    start:"top 60%",
                    end:"top 50%",
                }
                
        
        
            })
            gsap.fromTo(".scrollanimate1",{
                x:-400,
                opacity:0,
                
            },
            {
                x:0,
                opacity:1,
                duration:1,
                ease:"power1.out",
                scrollTrigger:{
                    markers:true,
                    trigger:".scrollanimate1",
                    start:"top 60%",
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
                duration:1,
                ease:"power1.out",
                scrollTrigger:{
                    markers:true,
                    trigger:".scrollanimaterev",
                    start:"top 60%",
                    end:"top 50%",
                }
                
        
        
            })



        },{scope:animationContainer3});











        return(

                <div ref={animationContainer3}>
                <div class="h-[60vh] w-full bg-teal-100  relative">
                <img src="./About.png" alt="" class="w-full h-full"></img>
                <div class="absolute top-[50%] left-[15%] lg:left-[25%] translate-y-[-50%] w-[80vw]  lg:w-[60vw]">
                    <h1 class="text-white text-[10vw] md:text-[8vw] lg:text-[4vw] font-[Outfit]"><span class="text-[#FE9132]">About</span>{" "}Us</h1>
                    <p class=" text-white text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto]">Empowering Futures, Shaping Minds: Welcome to RPS School. Discover our commitment to excellence, innovation, and holistic education.</p>
                </div>

                </div>


                <div class="flex flex-col items-center pt-[4vw]">
                    <h2 class=" textanimate lg:text-6xl text-center text-5xl tracking-wide lg:tracking-widest   my-[1vw] font-[Outfit]">Preparing Students to Achieve Success</h2>
                    <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                </div>


                
                    <div class="scrollanimate  flex flex-col  lg:flex-row items-center gap-4 justify-center my-8 w-[90vw] mx-auto">

                    <div class="  w-full lg:w-1/2 flex flex-col order-1 lg:order-0">
                    <h2 class="text-3xl lg:text-left text-center ">Developing Confident and<br/>
                        Successful Learners</h2>
                    <div class="h-[3px] lg:w-[80%] w-full bg-[#1B7242]"></div>
                    <p class="text-xl my-4 font-[Open Sans] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                    <button class="mx-auto bg-[#1B7242] h-[40px] w-[120px] mt-[1vw] text-white rounded">View More</button>
                    </div>

                    <div class="w-full justify-center lg:order-1  lg:w-1/2 flex lg:justify-end">
                        <img  class="object-contain" src="./blob.png" alt=""></img>
                    </div>

                    </div>


                <div class="scrollanimaterev flex flex-col lg:flex-row gap-4 items-center  mt-[2vw] w-[90vw] mx-auto">

                    <div class="lg:w-1/2 w-full order-1 flex flex-col  lg:text-right  ">
                        <h2 class="text-3xl text-center lg:text-right ">Developing Confident and<br />
                            Successful Learners</h2>
                        <div class="h-[3px] w-full lg:w-[80%] mr-0 ml-auto bg-[#1B7242]"></div>
                        <p class="text-xl my-4 font-[Open Sans] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                        <button class=" bg-[#1B7242] h-[40px] w-[120px] text-white mx-auto  rounded">View More</button>
                    </div>

                    <div class="w-[100%] lg:w-1/2 flex justify-center lg:justify-start">
                        <img class="object-contain" src="./blob2.png" alt=""></img>
                    </div>

                </div>

                                <div class="scrollanimate1 flex flex-col  lg:flex-row items-center gap-4 justify-center my-8 w-[90vw] mx-auto">

                <div class="w-full lg:w-1/2 flex flex-col order-1 lg:order-0">
                <h2 class="text-3xl lg:text-left text-center ">Developing Confident and<br/>
                    Successful Learners</h2>
                <div class="h-[3px] lg:w-[80%] w-full bg-[#1B7242]"></div>
                <p class="text-xl my-4 font-[Open Sans] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                <button class="mx-auto bg-[#1B7242] h-[40px] w-[120px] mt-[1vw] text-white rounded">View More</button>
                </div>

                <div class="w-full justify-center lg:order-1  lg:w-1/2 flex lg:justify-end">
                    <img  class="object-contain" src="./blob.png" alt=""></img>
                </div>

                </div>

                


                    <TeacherCarousel/>

                <div class="flex flex-col items-center my-8 font-[Outfit] justify-around">
                        <h2 class="lg:text-5xl text-center text-3xl tracking-wide lg:tracking-widest   mt-[1vw] font-[Outfit]">Why It Works</h2>
                        <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                    <div class="flex flex-col md:flex-row w-[90vw] mt-8 gap-4 items-center ">
                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[50px] w-[50px]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-xl font-bold tracking-wide">Personalized learning</h3>
                        <p class="font-[Open Sans] text-base">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                    </div>

                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[50px] w-[50px]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-xl font-bold tracking-wide">Trusted content</h3>
                        <p class="font-[Open Sans] text-base">Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p>
                    </div>



                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[50px] w-[50px]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-xl font-bold tracking-wide">Tools to empower teachers</h3>
                        <p class="font-[Open Sans] text-base">Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
                    </div>

                    </div>
                </div>
                









                </div>



        );

}


export default About;