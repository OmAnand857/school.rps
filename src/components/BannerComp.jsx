import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function BannerComp(props){
let back = "url" + "(" + props.image + ")";
        return(

                
            <div class="relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:back}}>
            <img class="w-full h-[60vh] md:h-[75vh]" src={props.image} alt=""></img>


        <div  class=" w-[80vw] lg:w-[40vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:top-[40%] lg:left-[39%] ">
            <p class=" text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto] text-white">Welcome to</p>
            <h1 class="text-[10vw] text-white font-bold mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Royal Public <br/> School <span class="text-[8vw] text-[#FE9132]">,</span> Raipur</h1>
            <div class='flex  text-white gap-[3vw] mt-[2vw]'><button class="bg-[#1B7242] p-[1vw] rounded">Get Started</button> <button class="bg-transparent border-white border-2 p-[1vw] rounded">Watch Video</button></div>
            
        </div>

      




        </div>


        );

}


export default BannerComp;