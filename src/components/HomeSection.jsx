import CardComp from "./CardComp";

function HomeSection(){
        return (    
            <>
                    <div class="my-8 relative" >
                    <img class="absolute top-[10%] h-[10vw] w-[18vw] left-[18%] object-contain" src="./Group 14.png" alt=""></img>
                            <div class="flex flex-col items-center">
                                
                                <h1 class="text-[#1B7242] my-[2vw] text-[5.5vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">ABOUT US</h1>
                                <div class="flex items-center w-4/5">
                                    <div class="w-2/4 h-full flex flex-col justify-center items-center">
                                        <p class="text-[2vw] font-[Roboto]">School has been providing outstanding education and support to students across the globe. Amanora School is affiliated to the Central Board of Secondary Education (1130452), India. It follows MyPedia curriculum in Kindergarten and switches to CBSE for Grades 1 to 12, representing multiple ethnicities – making us a truly international community. We offer a blend of academic, cultural, technological and globally connected activities within a dynamic environment.</p>
                                        <button class=" rounded-sm my-[1vw] lg:rounded-md w-[10vw] text-center h-[3.125vw] bg-[#1B7242] text-[1.5vw] text-white">View More</button>
                                    </div>
                                    <div class="w-2/4"><img src="https://static.vecteezy.com/system/resources/thumbnails/007/343/251/small_2x/school-building-in-flat-style-modern-school-college-building-illustration-vector.jpg" alt=""/></div>
                                </div>
                            </div>
                    </div>



                
                    <div class="flex flex-col items-center my-8 relative">
                    <img  class="object-contain absolute top-[5vw] left-[65vw] h-[10vw] w-[10vw] "src="./Group 9.png" alt=""></img>
                            <h1  class="text-[#1B7242] my-[2vw] text-[5.5vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">DIRECTORS MESSAGE</h1>
                            <div class="flex items-center w-4/5">
                                <div class="w-2/4 " >
                                        <img class="h-full w-full"  src="https://th.bing.com/th/id/R.84638a6215f41d78a6aca7e6ee425702?rik=KN9%2bpuqbjuPJVg&riu=http%3a%2f%2fwww.mca.k12.pa.us%2fwp%2fmcaes%2fwp-content%2fuploads%2fsites%2f3%2f2016%2f10%2fDSC04312-1080x718.jpg&ehk=KIl2pBrCeWihOP2olYxOT83rNWgOIzVCpg%2bYRK3zgEY%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
                                </div>
                                <div class="w-2/4 flex flex-col items-center">
                                    <p class="text-[2vw] pl-[2vw] font-[Roboto]">We, at RPS School are committed to providing a high-quality education for our students. We emphasise the importance of achieving personal standards of excellence in academic, sporting, cultural and recreational activities. The school combines excellent facilities with a progressive curriculum, proactive values teaching and high expectations of students in performance and behaviour.</p>
                                    <button class=" rounded-sm my-[1vw] lg:rounded-md w-[10vw] text-center h-[3.125vw] bg-[#1B7242] text-[1.5vw] text-white">View More</button>
                                </div>
                            </div>

                    </div> 

                    <div class="relative flex flex-col items-center my-8">
                    <img  class="object-contain absolute top-[-1.75vw] left-[7.75vw] h-[10vw] w-[10vw] "src="./scribble final version-145.png" alt=""></img>

                        <div class="flex flex-col items-center w-4/5 text-center">
                            <h1  class="text-[#1B7242] mt-[2vw] text-[4.5vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">Exploring Boundless Creativity</h1>
                            <h3  class="text-[#1B7242]  text-[3.5vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">Highlights of Our Past Activities</h3>
                            <p class="text-[2vw] font-[Roboto]">"Dive into our gallery of past activities to witness the vibrant tapestry of our school's dynamic spirit. Each snapshot captures the essence of creativity, collaboration, and joy, showcasing the boundless potential of our young learners."</p>
                            <div class="flex flex-wrap justify-around mt-[1vw]">
                            <CardComp/>
                            <CardComp/>
                            <CardComp/>
                            <CardComp/>
                            <CardComp/>
                            <CardComp/>

                            </div>
                        </div>
                    </div>
                    
                    <section>
                                <div>

                                </div>



                    </section>
                  
                        </>
        )                

}
export default HomeSection;