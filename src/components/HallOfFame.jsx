import ResultCard from "./ResultCard";


function HallOfFame(){

        return(

                <div className="w-100 mt-4 pb-6 bg-[#D9F0E8] flex flex-col items-center">
                                    <h1 class=" uppercase text-[#1B7242] mt-4 text-[6.75vw] lg:text-[4.75vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">hall of fame</h1>
                                    <h1 class=" uppercase text-[#1B7242]  text-[6.75vw] lg:text-[4.75vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">Toppers 2023-24 class x</h1>



                                    <div className="flex flex-wrap mt-12 gap-[1vw] w-[90%]   justify-around">
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                        <ResultCard/>
                                    </div>
                                    <button className="uppercase bg-[#308B2E] font-[Outfit] tracking-wider transition duration-100 ease-out hover:ease-in hover:bg-[#FE9132] rounded h-[40px] w-[180px] text-white">View More</button>
                </div>

        );


}


export default HallOfFame;