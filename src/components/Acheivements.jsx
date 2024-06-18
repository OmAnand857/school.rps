
import { Link } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Acheivements(){


    return (
            <div className="w-[80%] p-4 my-16 mx-auto bg-[#308B2E] rounded flex flex-col  items-center lg:flex-row justify-around ">

                    <div className="flex flex-col text-center w-[30%] m-4 items-center gap-[10px]">
                        <span id="teachers" className="text-[#FE9132] text-4xl">5000+</span>
                        <span className="text-white text-3xl">Certified Teachers</span>
                    </div>


                    <div className="flex flex-col w-[30%] items-center m-4  text-center gap-[10px]">
                        <span id="students" className="text-[#FE9132] text-4xl">100+</span>
                        <span className="text-white text-3xl">Students</span>
                        <Link to="/Admissions"><button className="bg-[#9CCB7F] font-[Outfit] flex items-center  justify-around tracking-wider transition duration-100 ease-out hover:ease-in hover:bg-[#FE9132] rounded h-[40px] w-[180px] text-white">ADMISSIONS<OpenInNewIcon/></button></Link>
                    </div>


                    <div className="flex flex-col text-center m-4  w-[30%] items-center gap-[10px]">
                        <span id="awards" className="text-[#FE9132] text-4xl">60+</span>
                        <span className="text-white text-3xl">CountrySide Awards</span>
                    </div>

            </div>
    );
}

export default Acheivements;