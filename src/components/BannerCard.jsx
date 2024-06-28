import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

function BannerCard(){

    return(
            
        <div className=" hidden lg:flex h-[40vh] w-[65vw]  absolute bottom-[-30%]  left-[50%] translate-x-[-50%] z-[5]  justify-around">

        <div className="  flex flex-col items-center gap-4  w-[30%] h-full shadow-xl">
            <img className="w-full h-[70%]" src="./Rectangle 5.png" alt=""></img>
        <Link to="admissions"> <div className="flex flex-col items-center cursor-pointer">
                <h3 className="text-xl">Admissions</h3>
                <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

            </div></Link> 

        </div>

        <div className=" flex flex-col items-center gap-4 w-[30%] h-full shadow-xl">
            <img className="w-full h-[70%]" src="./image 4.png" alt=""></img>
        <Link to="about">    <div className="flex flex-col items-center cursor-pointer">
                <h3 className="text-xl">About Us</h3>
                <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

            </div></Link>


                            </div>


    <div className=" flex flex-col items-center gap-4 w-[30%] h-full shadow-xl">
        <img className="w-full h-[70%]" src="./image 3.png" alt=""></img>
    <Link to="/SchoolLife">  <div className="flex flex-col items-center cursor-pointer">
            <h3 className="text-xl">Facilities</h3>
            <ArrowForwardIcon className="text-[#FE9132] text-[1rem]"/>

        </div></Link>

    </div>


    </div>


       

    );
};

export default BannerCard;