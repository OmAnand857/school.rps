import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Email from '@mui/icons-material/Email';

function Footer1(){
        const year = new Date().getFullYear();
        return(

                <div className="w-full text-white flex bg-[#308B2E] p-4  flex-col">
                    <div className="flex justify-around m-4 flex-col md:flex-row items-center gap-12 ">


                        <div className="flex justify-around w-[100%] md:w-[60vw] mt-2">
                    
                          
                                    <ul className="flex flex-col gap-2">
                                        <li>Home</li>
                                        <li>School Life</li>
                                        <li>Admissions</li>
                                        <li>Our Results</li>
                                        <li>Online Admission</li>
                                    </ul>
                            
                       
                                    <ul className="flex flex-col gap-2">
                                        <li>About Us</li>
                                        <li>News & Updates</li>
                                        <li>Gallery</li>
                                        <li>Our Results</li>
                                        <li>Contact Us</li>
                                    </ul>

                       
                    </div>

                    <div className="flex flex-col w-[100%] md:w-[30vw]">
                        <h3 className="text-xl pl-2 m-2">Royal Public School</h3>
                        <div className="flex gap-2  p-2">
                        <LocationOnIcon/>
                        <span>Chourasiya Colony, Nav Durga Nagar, Mathpurena, Raipur - 492001, Chhattisgarh</span>
                        </div>
                        <div className="flex gap-2 p-2">
                        <PhoneIcon/>
                        <span>+91-95890-85558<br/>+91-93296-21221</span>
                        </div>
                        <div className="flex gap-2 p-2">
                        <Email/>
                        <span>rpsraipur123@gmail.com</span>
                        </div>
                    </div>

                    </div>

                <div className="w-[90vw] mx-auto  py-4 md:p-2 border-y-[1px] border-white flex flex-col md:flex-row justify-around items-center ">

<lottie-player src="https://lottie.host/72c63c4b-39f6-4ea9-8a2c-92d665e19ebc/CYHFzGalyk.json" background="#308B2E" speed="1" style={{width:"300px", height:"300px"}} loop  autoplay direction="1" mode="normal"></lottie-player>





                <div className="  flex flex-col items-center mb-4 md:mb-0 gap-2">
                    <h2>NewsLetter</h2>
                    <div className="md:w-[50vw] w-[80vw] h-[40px] border-[2px] border-white rounded flex">

                        <input className=" p:[10px] border-none bg-[#308B2E] color-white outline-none grow text-[1em]" type="text" placeholder="Email Id"></input>
                        <div className="text-black cursor-pointer bg-white h-full w-[20%] p-2 uppercase text-center">SEND</div>
                    </div>
                    </div>
                    
                </div>
                <span className="mx-auto mt-[10px]" >© Copyright {year} RPS School</span>

               






                </div>



        );



}

export default Footer1;