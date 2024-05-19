import React from "react";


function TeacherCarousel(){

        return (
                        <>
                        
                                <div class="flex flex-col items-center my-[1vw]">
                                <h2 class="lg:text-[4vw] text-[5vw] tracking-wide lg:tracking-widest   my-[1vw] font-[Outfit]">Teachers</h2>
                                <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                                        </div>

                                <swiper-container
                                        height="500px"
                                        autoplay="true"
                                        speed="1000"
                                       loop="true" 
                                       navigation="false"
                                        slides-per-view="3"
                                        space-between="45px"
                                        effect="coverflow"
                                        centered-slides="false"
                                        coverflow-effect-rotate="0"
                                        coverflow-effect-stretch="0"
                                        coverflow-effect-depth="100"
                                        coverflow-effect-slide-shadows="false"
                                >

                                                <swiper-slide   >
                                                <img class="h-[300px]  lg:h-[30vw]" src="./Group15094.png" alt=""></img>
                                                </swiper-slide>

                                                <swiper-slide >
                                                <img class="h-[300px]  lg:h-[30vw]"  src="./Group15094.png" alt=""></img>
                                                </swiper-slide>

                                                <swiper-slide >
                                                <img class="h-[300px]  lg:h-[30vw]"  src="./Group15094.png" alt=""></img>
                                                </swiper-slide>
                                                <swiper-slide >
                                                <img class="h-[300px]  lg:h-[30vw]"  src="./Group15094.png" alt=""></img>
                                                </swiper-slide>
                                                <swiper-slide >
                                                <img class="h-[300px]  lg:h-[30vw]" src="./Group15094.png" alt=""></img>
                                                </swiper-slide>
                                                <swiper-slide >
                                                <img class="h-[300px]  lg:h-[30vw]"  src="./Group15094.png" alt=""></img>
                                                </swiper-slide>





                                </swiper-container>


              </>





        );


}


export default TeacherCarousel;