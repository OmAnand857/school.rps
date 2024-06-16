

function BannerComp(){

        return(

                
            <div class="relative">
            <img class="w-full h-[75vh]" src="./homeBanner.png" alt=""></img>


        <div  class=" w-[80vw] lg:w-[40vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:top-[40%] lg:left-[39%] ">
            <p class=" text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto] text-white">Welcome to</p>
            <h1 class="text-[10vw] text-white font-bold mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Royal Public <br/> School <span class="text-[8vw] text-[#FE9132]">,</span> Raipur</h1>
            <div class='flex  text-white gap-[3vw] mt-[2vw]'><button class="bg-[#1B7242] p-[1vw] rounded">Get Started</button> <button class="bg-transparent border-white border-2 p-[1vw] rounded">Watch Video</button></div>
            
        </div>

        <div class=" hidden lg:flex h-[40vh] w-[65vw]  absolute bottom-[-20%] left-[50%] translate-x-[-50%]  justify-around">

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





        </div>


        );

}


export default BannerComp;