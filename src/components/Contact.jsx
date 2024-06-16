import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Contact(){

        return(

            <div class='w-[100vw] mx-auto flex flex-col lg:flex-row text-center mb-[4vw]'>

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





        )







}

export default Contact;