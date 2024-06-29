import { useRef } from "react";
import { Link } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Person3Icon from '@mui/icons-material/Person3';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Acheivements(){
    

    const AcheivementsRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{


        gsap.fromTo(".fadeingsapCard",{
            opacity:0,
            y:70
        },{
            opacity:1,
            y:0,
            duration:0.5,
            ease:"power1.inOut",
            stagger:0.1,
            scrollTrigger:{
                trigger:".fadeingsapCard",
               // markers:true,
                start:"top 70%",
                end:"top 40%",
            }
        });
        gsap.fromTo(".textanimate2",{
            x:-50,
            opacity:0,
        },
        {
            x:0,
            opacity:1,
            duration:0.5,
           ease:"power1.out",
           scrollTrigger:{
            trigger:".fadeingsapCard",
           // markers:true,
            start:"top 70%",
            end:"top 40%",
        }
        })

    },{scope: AcheivementsRef.current});









    return (
            <div ref={AcheivementsRef}  className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-[100%] min-h-[60vh] p-8 my-16 mx-auto  rounded flex flex-col  items-center gap-4 xl:flex-row justify-around " >
                    
                    <div class="textanimate2 text-center md:text-left">
                        <h1 className="text-white font-[Open_Sans] font-semibold text-5xl tracking-wider">RPS Acheivements</h1>
                        <p class="text-base lg:text-xl text-white my-2">Celebrating our students , outstanding accomplishments and milestones!</p>
                    </div>

                    <div className="flex flex-col  items-center lg:flex-row justify-around ">
                    <div className="fadeingsapCard flex flex-col  bg-transparent border-r-2 text-center  h-[250px] w-[250px] rounded-lg p-4 m-4 justify-center items-center gap-[10px]">
                        <Person3Icon style={{color:"white",fontSize:"4rem"}}/>
                        <span id="teachers" className="text-[#FE9132] text-4xl">5000+</span>
                        <span className="text-white text-3xl">Certified Teachers</span>
                    </div>


                    <div className="fadeingsapCard flex flex-col  bg-transparent border-r-2 text-center  h-[250px] w-[250px] rounded-lg p-4 m-4 justify-center items-center gap-[10px]">
                        <GroupsIcon style={{color:"white",fontSize:"4rem"}}/>
                        <span id="students" className="text-[#FE9132] text-4xl">100+</span>
                        <span className="text-white text-3xl">Students</span>
                        <Link to="/Admissions"><button className="bg-transparent border font-[Outfit] flex items-center  justify-around tracking-wider transition duration-100 ease-out hover:ease-in hover:bg-[#FE9132] rounded h-[40px] w-[180px] text-white">ADMISSIONS<OpenInNewIcon/></button></Link>
                    </div>


                    <div className="fadeingsapCard flex flex-col  bg-transparent border-r-2 text-center  h-[250px] w-[250px] rounded-lg p-4 m-4 justify-center items-center gap-[10px]">
                    
                    <EmojiEventsIcon style={{color:"white",fontSize:"4rem"}}/>
                        <span id="awards" className="text-[#FE9132] text-4xl">60+</span>
                        <span className="text-white text-3xl">CountrySide Awards</span>
                    </div>
                </div>

            </div>
    );
}

export default Acheivements;