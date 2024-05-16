import React , { useState , useEffect } from "react";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function SchoolLife(){

    const [ facilityArray , setFacilityArray ] = useState([1,0,0,0,0]);
    function handleClick(event,id){
                const nextFacilityArray = [...facilityArray];
                nextFacilityArray[id]=1;
                for(var i=0;i<nextFacilityArray.length;i++){
                    if(i!==id){
                        nextFacilityArray[i]=0;
                    }
                }
                setFacilityArray(nextFacilityArray);

    }
    useEffect(()=>{
            const FacilitiesList = Array.from (document.getElementsByClassName("FacilitiesList"));
            const FacilityImages=Array.from(document.getElementsByClassName("FacilityImages"));
            for(var i=0;i<facilityArray.length;i++){
                if(facilityArray[i]===1){
                    FacilityImages[i].style.display="block";
                    FacilitiesList[i].style.backgroundColor="#1B7242";
                    FacilitiesList[i].style.color="white";
                }
                else{
                    FacilityImages[i].style.display="none";
                    FacilitiesList[i].style.backgroundColor="#F2F2F2";
                    FacilitiesList[i].style.color="black";
                }
            }


    },[facilityArray])




return(


                <div>

                    <div class="w-full h-[60vh] relative">
                        <img class="h-full w-full" src="./schoollife.png" alt=""></img>
                         <div class="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <h1 class="text-white text-[10vw] md:text-[8vw] lg:text-[4vw] font-[Outfit]">Discover <br/> <span class="text-[#FE9132]">School Life</span></h1>
                            </div>
                    </div>

                    <div class="flex flex-col items-center pt-[4vw] w-[90vw] mx-auto text-center">
                    <h2 class="lg:text-[4vw] text-[5vw] tracking-wide lg:tracking-widest text-[#1B7242] font-bold   my-[1vw] font-[Outfit]">FACILITIES</h2>
                    <img class="lg:w-[20vw] w-[35vw] md-[22.5vw] " src="./Frame.png" alt=""></img>
                    <p class=" mt-[1vw] text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto]">Each child is different, and at Raipur Public School, Raipur we understand this and provide the young scholars with the ideal learning environment.</p>
                </div>



                <div class="w-[90vw] mx-auto flex h-[300px] lg:h-[500px] my-[2vw]">

                        <div class="w-[50%]  flex flex-col justify-around">
                                <button onClick={event=>handleClick(event,0)} class=" FacilitiesList  bg-[#1B7242]  text-[3.5vw] lg:text-[2vw] text-white h-[19.5%]"> Health & Safety</button>
                                <button onClick={event=>handleClick(event,1)} class=" FacilitiesList bg-[#F2F2F2]  text-[3.5vw] lg:text-[2vw] h-[19.5%]"> Security</button>
                                <button onClick={event=>handleClick(event,2)} class=" FacilitiesList bg-[#F2F2F2]  text-[3.5vw] lg:text-[2vw] h-[19.5%]">Music</button>
                                <button onClick={event=>handleClick(event,3)} class="FacilitiesList  bg-[#F2F2F2] text-[3.5vw] lg:text-[2vw] h-[19.5%]"> Library</button>
                                <button onClick={event=>handleClick(event,4)} class="FacilitiesList  bg-[#F2F2F2]  text-[3.5vw]  lg:text-[2vw] h-[19.5%]">Computer Lab</button>
                        </div>

                        <div className="w-1/2 relative">
                                <img  class=" FacilityImages h-full w-full absolute" src="https://www.amanoraschool.edu.in/public/uploads/2023/health-safety.jpg" alt=""></img>
                                <img class=" FacilityImages h-full w-full absolute" src="https://www.amanoraschool.edu.in/public/uploads/2023/1693912751-64f70eafca8fd.jpg" alt=""></img>
                                <img class=" FacilityImages h-full w-full absolute" src="https://www.amanoraschool.edu.in/public/uploads/2023/music.png" alt=""></img>
                                <img  class= "FacilityImages h-full w-full absolute" src="https://www.amanoraschool.edu.in/public/uploads/2023/library.png" alt=""></img>
                                <img class="FacilityImages h-full w-full absolute" src="	https://www.amanoraschool.edu.in/public/uploads/2023/computer-labs.png" alt=""></img>
                             </div>




                </div>




                    <div class='w-[90vw] mx-auto text-center my-[4vw]'>
                                <h2 class="lg:text-[4vw] text-[5vw] tracking-wide lg:tracking-widest font-bold uppercase text-[#1B7242]   my-[1vw] font-[Outfit]">Student Activities</h2>
                            <div class="flex flex-col justify-around">



                                    <div class="w-full flex gap-[2vw] my-[2vw] border rounded-[16px]">
                                                <div class="w-[30%]" >
                                                    <img class='h-full w-full' src="FrameSchool1.png" alt=""></img>
                                                </div>
                                                <div class="w-[70%]  flex flex-col justify-around text-left p-[2vw]">
                                                        <div class="flex text-[#6E798C] ">
                                                            <small class="uppercase">sports</small>
                                                            <small class="mr-0 ml-auto ">3 days ago</small>
                                                        </div>
                                                        <div>
                                                                <h3  class="lg:text-[4vw] font-['DM_Serif_Display'] text-[5vw] leading-[110%] tracking-wide lg:tracking-widest mb-[1vw] ">Intra School Cricket Tournament</h3>
                                                                <p class="text-[#374A59]">The intra-school sports tournament is a dynamic event where students from all grades unite to compete in various sports. It fosters camaraderie, celebrates achievements, and promotes physical fitness and teamwork.</p>
                                                        </div>

                                                        <div class="flex text-[#007AE9] items-center ">
                                                            <img class="h-[3vw] w-[3vw] rounded-full mr-[1vw]" src="https://th.bing.com/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?rs=1&pid=ImgDetMain" alt=""></img>
                                                            <span class="uppercase">PT Teacher</span>
                                                            <span class="mr-0 ml-auto ">Read More</span>
                                                        </div>



                                                </div>
                                    </div>


                                    
                                    <div class="w-full flex gap-[2vw] my-[2vw] border rounded-[16px]">
                                                <div class="w-[30%]" >
                                                    <img class="h-full w-full" src="FrameSchool2.png" alt=""></img>
                                                </div>
                                                <div class="w-[70%] flex flex-col justify-around text-left p-[2vw]">
                                                        <div class="flex text-[#6E798C] ">
                                                            <small class="uppercase">Science</small>
                                                            <small class="mr-0 ml-auto ">3 days ago</small>
                                                        </div>
                                                        <div>
                                                                <h3  class="lg:text-[4vw] font-['DM_Serif_Display'] text-[5vw] leading-[110%] tracking-wide lg:tracking-widest mb-[1vw] ">A session was conducted on Black Hole and Dark Matter</h3>
                                                                <p class="text-[#374A59]">Discover the intrigue of black holes and dark matter in this riveting session. Explore their profound impact on astrophysics and the universe, from the gravitational pull of black holes to the elusive nature of dark matter. </p>
                                                        </div>

                                                        <div class="flex text-[#007AE9] items-center ">
                                                            <img class="h-[3vw] w-[3vw] rounded-full mr-[1vw]" src="https://th.bing.com/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?rs=1&pid=ImgDetMain" alt=""></img>
                                                            <span class="uppercase">PT Teacher</span>
                                                            <span class="mr-0 ml-auto ">Read More</span>
                                                        </div>



                                                </div>

                                    </div>



                                    
                                    <div class="w-full flex gap-[2vw] my-[2vw] border rounded-[16px]">
                                                <div class="w-[30%]" >
                                                    <img class="h-full w-full" src="FrameSchool3.png" alt=""></img>
                                                </div>
                                                <div class="w-[70%] flex flex-col justify-around text-left p-[2vw]">
                                                        <div class="flex text-[#6E798C] ">
                                                            <small class="uppercase">Culture</small>
                                                            <small class="mr-0 ml-auto ">3 days ago</small>
                                                        </div>
                                                        <div>
                                                                <h3  class="lg:text-[4vw] font-['DM_Serif_Display'] text-[5vw] leading-[110%] tracking-wide lg:tracking-widest mb-[1vw] ">A classical dance performance on Navratri</h3>
                                                                <p class="text-[#374A59]">Navratri brings alive the spirit of classical dance, where performers enchant audiences with their graceful movements and expressive gestures. Amidst the festive fervor, these captivating performances pay homage to tradition.</p>
                                                        </div>

                                                        <div class="flex text-[#007AE9] items-center ">
                                                            <img class="h-[3vw] w-[3vw] rounded-full mr-[1vw]" src="https://th.bing.com/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?rs=1&pid=ImgDetMain" alt=""></img>
                                                            <span class="uppercase">PT Teacher</span>
                                                            <span class="mr-0 ml-auto ">Read More</span>
                                                        </div>



                                                </div>

                                    </div>




                            </div>

                    </div>





                    <div class='w-[90vw] mx-auto flex flex-col lg:flex-row text-center my-[4vw]'>

                            <div class="lg:w-1/2 w-full h-[300px] lg:h-auto">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.5764418433063!2d81.63580611251032!3d21.20731201519693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddb044536fcf%3A0x958e18e6aae34efc!2sRoyal%20Public%20School!5e0!3m2!1sen!2sin!4v1715878863354!5m2!1sen!2sin" class='w-full h-full border-0 ' title="address" ></iframe>

                            </div>

                            <div class="lg:w-1/2 w-full lg:h-auto  bg-[#ACD8C8] text-white text-left relative p-[4vw]">
                                    <h1 class="lg:text-[3vw] text-[5vw] tracking-wide  text-white  font-[Outfit] mb-[3vw]">Contact for Information</h1>
                                    <div class='flex flex-col  gap-[3vw]'>
                                       <div class="flex"><PhoneInTalkIcon className="mr-[2vw]"/><div>+91-95890-85558 +91-93296-21221</div></div>
                                        
                                        <div class="flex"><EmailIcon className="mr-[2vw]"/> <div>rpsraipur123@gmail.com</div></div>
                                       <div class="flex"> <LocationOnIcon className="mr-[2vw]"/><div>near Bandhan Bank, Chaurasiya Colony, Nav Durga Nagar, Mathpurena, Chhattisgarh 492001</div></div>
                                    </div>

                                    <div class='flex justify-around lg:justify-normal lg:gap-[5vw] mt-[5vw]'> <InstagramIcon/><FacebookIcon/> <XIcon/></div>
                                    <button onClick={()=>{window.location.href="https://maps.app.goo.gl/Rpzg2KyA9DfV3hXq7"}}   class="rounded bg-[#1B7242] p-[2vw] lg:p-[0.75vw] mt-[2vw] text-white">Virtual Tour</button>

                                    
                                        <img class=" hidden lg:block absolute bottom-[0] right-[5vw] h-[14vw] w-[15vw]" src="./Groupcontact.png" alt=""></img>
                                

                            </div>





                    </div>






















                </div>










);




};


export default SchoolLife;