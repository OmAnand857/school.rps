import ThreeDSlide from "./3DSlide";



function Testimonial1(){

    return (
            < >
            <div class=" bg-[rgb(51,158,102)] pt-8 relative ">

            <h1 class="text-center text-5xl  font-[Outfit] uppercase font-semibold  text-white">This is What Our <span class="text-[#FE9132]">Students</span> Say</h1>
        
      <ThreeDSlide/>

      <div class=" w-full mt-8 mx-auto flex-col flex justify-around items-center bg-[rgb(51,158,102)] p-[2vw]">
                        <h3 class="text-[7vw] leading-[7.1vw] text-center text-white">
                            Let's Create a Better Future For Your Children
                        </h3>
                        <lottie-player src="https://lottie.host/6783a156-aa45-4b1e-9d0e-839175e434c9/LQdlcWmOq4.json" background="rgb(51,158,102)" speed="1" style={{width: "300px" ,height: "300px"}} loop  autoplay direction="1" mode="normal"></lottie-player>
                        
      </div>
      </div>
      </>

    );


}



export default Testimonial1;