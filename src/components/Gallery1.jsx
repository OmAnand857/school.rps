function Gallery1(){
    return(
        <div class="relative flex flex-col items-center my-8">
        <img   class="scroll-plane hidden md:block object-contain absolute top-[-1.75vw] left-[7.75vw] h-[10vw] w-[10vw] "src="./scribble final version-145.png" alt=""></img>

            <div class="flex flex-col items-center w-[90%] text-center">
                <h1  class="text-[#1B7242] mt-[2vw] text-[4.5vw] leading-[150%] tracking-wide font-[Outfit] font-semibold">Exploring Boundless Creativity</h1>
                <p class="text-2xl font-[Roboto]">" Each snapshot captures the essence of creativity, collaboration, and joy, showcasing the boundless potential of our young learners."</p>
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
    );
}

export default Gallery1;