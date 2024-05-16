import React from "react";
import TeacherCarousel from "./TeacherCarousel";


function About(){

        return(

                <div>
                <div class="h-[60vh] w-full bg-teal-100  relative">
                <img src="./About.png" alt="" class="w-full h-full"></img>
                <div class="absolute top-[50%] left-[15%] lg:left-[25%] translate-y-[-50%] w-[80vw]  lg:w-[60vw]">
                    <h1 class="text-white text-[10vw] md:text-[8vw] lg:text-[4vw] font-[Outfit]"><span class="text-[#FE9132]">About</span>{" "}Us</h1>
                    <p class=" text-white text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto]">Empowering Futures, Shaping Minds: Welcome to RPS School. Discover our commitment to excellence, innovation, and holistic education.</p>
                </div>

                </div>


                <div class="flex flex-col items-center pt-[4vw]">
                    <h2 class="lg:text-[4vw] text-[5vw] tracking-wide lg:tracking-widest   my-[1vw] font-[Outfit]">Preparing Students to Achieve Success</h2>
                    <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                </div>


                
                    <div class="flex items-center justify-center mt-[2vw] w-[90vw] mx-auto">

                    <div class="w-1/2 flex flex-col">
                    <h2 class="text-[3vw] ">Developing Confident and<br/>
                        Successful Learners</h2>
                    <div class="h-[3px] w-[80%] bg-[#1B7242]"></div>
                    <p class="text-[2vw] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                    <button class=" about-us-buttons h-[4vw] w-[15vw] mt-[1vw] rounded"></button>
                    </div>

                    <div class="w-[50%] flex justify-end">
                        <img  class="object-contain" src="./blob.png" alt=""></img>
                    </div>

                    </div>


                <div class="flex items-center justify-center mt-[2vw] w-[90vw] mx-auto">

                    <div class="w-1/2 order-1 flex flex-col items-end text-right">
                        <h2 class="text-[3vw] ">Developing Confident and<br />
                            Successful Learners</h2>
                        <div class="h-[3px] w-[80%] bg-[#1B7242]"></div>
                        <p class="text-[2vw] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                        <button class=" about-us-buttons-invert h-[4vw] w-[15vw] mt-[1vw] rounded"></button>
                    </div>

                    <div class="w-[50%] flex justify-start">
                        <img class="object-contain" src="./blob2.png" alt=""></img>
                    </div>

                </div>


                <div class="flex items-center justify-center mt-[2vw] w-[90vw] mx-auto">

                    <div class="w-1/2">
                        <h2 class="text-[3vw] ">Developing Confident and<br />
                            Successful Learners</h2>
                        <div class="h-[3px] w-[80%] bg-[#1B7242]"></div>
                        <p class="text-[2vw] ">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                        <button class=" about-us-buttons h-[4vw] w-[15vw] mt-[1vw] rounded"></button>
                    </div>

                    <div class="w-[50%] flex justify-end">
                        <img class="object-contain" src="./blob.png" alt=""></img>
                    </div>

                </div>

                


                    <TeacherCarousel/>

                <div class="flex flex-col items-center mt-[4vw] font-[Outfit] justify-around">
                        <h2 class="lg:text-[4vw] text-[5vw] tracking-wide lg:tracking-widest   mt-[1vw] font-[Outfit]">Why It Works</h2>
                        <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                    <div class="flex w-[90vw] mt-[2vw] gap-[1vw] items-center justify-around">
                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[8vw] w-[8vw]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-[2.5vw] font-bold tracking-tighter">Personalized learning</h3>
                        <p class=" text-black text-[3vw] md:text-[2vw] lg:text-[2vw] font-[Roboto]">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                    </div>

                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[8vw] w-[8vw]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-[2.5vw] font-bold tracking-tighter">Trusted content</h3>
                        <p class=" text-black text-[3vw] md:text-[2vw] lg:text-[2vw] font-[Roboto]">Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p>
                    </div>



                    <div class="flex flex-col text-center items-center">
                        <img class=" h-[8vw] w-[8vw]" src="./Frame1.png" alt=""></img>
                        <h3 class="text-[2.5vw] font-bold tracking-tighter">Tools to empower teachers</h3>
                        <p class=" text-black text-[3vw] md:text-[2vw] lg:text-[2vw] font-[Roboto]">Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
                    </div>

                    </div>
                </div>
                









                </div>



        );

}


export default About;