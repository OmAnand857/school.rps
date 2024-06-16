import ResultCard from "./ResultCard";

function HallOfFame(){

        return(

                <div className="w-100 mt-4  py-20 bg-[#B0E3D1] flex flex-col items-center">
                                    <h1 class=" capitalize  mt-4 text-[6.75vw] lg:text-[4.75vw] leading-[150%] tracking-wide font-[Outfit] ">hall of <span className="text-[#FE9132]">fame</span></h1>
                                    <h1 class="capitalize  text-[6.75vw] lg:text-[4.75vw] leading-[150%] tracking-wide font-[Outfit] "> <span className="text-[#050C9C]">Toppers</span> 2023-24 class x</h1>



                                    <div className="flex flex-wrap mt-12 gap-[1vw] w-[90%]   justify-around">
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                    </div>
                                    <button className="uppercase bg-[#308B2E] font-[Outfit] tracking-wider transition duration-100 ease-out hover:ease-in hover:bg-[#FE9132] rounded h-[40px] w-[180px] text-white"><span>View More</span> </button>
                </div>

        );


}


export default HallOfFame;