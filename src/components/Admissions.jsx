import React from "react";


function Admissions(){

    return (

            <div>
            <div class="h-[60vh] w-full relative">
            <img class="absolute h-[5vw] w-[5vw] top-[20vw] right-[10vw] animate-bounce" src="./Ellipse 28.png" alt=""></img>
            <img  class="absolute h-[5vw] w-[5vw] top-[7vw] right-[17vw] animation-triangle-float " src="./Polygon 1.png" alt=""></img>
            <img  class="absolute h-[5vw] w-[5vw] top-[10vw] right-[40vw] animation-rectangle-float" src="./Rectangle 23.png" alt=""></img>

            <img class="w-full h-full " src="./Frame2.png" alt=""></img>
            <div class="h-[10vw] w-[80vw] lg:w-[30vw] absolute top-[50%] left-[20%] translate-y-[-50%]">
            <h1 class="text-[10vw] mb-[1vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] leading-[100%]">Unlock Your<br/> 
                           <span class="text-[#FE9132]">Future</span> </h1>
            <p class=" text-[5vw] md:text-[4vw] lg:text-[2vw] font-[Roboto]">Apply Now for a Transformative Educational Journey!</p>
            </div>
            
            </div>







            <div class="flex-col flex lg:flex-row w-[80vw] items-center mx-auto gap-[2vw] p-[2vw] my-[2vw]">

                <div>
                    <img class=" w-full lg:w-[30vw] h-full" src="./Group15094.png" alt=""/>
                </div>

                <div class=" w-full lg:w-[50%] flex flex-col justify-around">
                <h1 class=" text-[3vw] fony-[Outfit] ">Admission Contact Form</h1>
                    
                    <div class="flex gap-[1vw]">
                            <div class="ml-0 w-[100%]"><label for="studentName" >Student Name</label><br/>
                                <input class="border-black border-2 rounded p-3 w-full"  id="studentName" type="text"></input>
                            </div>
                        <div class="mr-0 ml-auto w-[100%]">
                        <label for="fatherName">Father Name</label><br/>
                        <input class="border-black border-2 rounded p-3 w-full"  id="fatherName" type="text"></input>
                         </div>
                    </div>
                    <div class='flex flex-col'>
                    <label for="email">Email</label>
                    <input class="border-black border-2 rounded p-3"  id="email"></input>
                    </div>
                    <div class='flex flex-col'>
                    <label for="mobileNumber">Mobile Number</label>
                    <input class="border-black border-2 rounded p-3" id="mobileNumber"></input>
                    </div>
                    <div class='flex flex-col'>
                    <label for="class">Class</label>
                    <input class="border-black border-2 rounded p-3"  id="class"></input>
                    
                    </div>
                    <button class="w-full mt-[2vw] p-[1vw] bg-[#1B7242] text-xl text-white">Submit</button>

                </div>

            </div>



            <div class="flex flex-col w-[90vw] mx-auto my-12 items-center">

                <h1 class=" text-[8vw] md:text-[8vw] lg:text-[4vw] font-[Outfit]"><span class="text-[#1B7242]">Top</span> School In Chattisgarh</h1>
                <h3 class=" text-[8vw] md:text-[6vw] lg:text-[2vw] font-[Outfit] mb-[2vw]"><span class="text-[#FE9132]">Best</span> school in Raipur</h3>

                <div >
                        <h3  class=" text-[8vw] md:text-[6vw] lg:text-[2vw] font-[Outfit]">Admission Process</h3>
                        <ol class="list-decimal pl-6">
                            <li>Two passport size photographs of parents (Mother/Father).</li>
                            <li>Birth Certificate (Photocopy).</li>
                            <li>Transfer Certificate Original (Gr. I onwards).</li>
                            <li>Latest Progress Report Card (Photocopy).</li>
                            <li>Address Proof (Photocopy).</li>
                            <li>Medical Fitness & Blood Group Certificate (Photocopy).</li>
                            <li>Immunization & Vaccination Record.</li>
                            <li>Proof of residence address- Electricity Bill/Telephone(landline) bill/Current Bank Account Statement/- lease deed made six months  prior to the submission of the application form along with an affidavit on stamp paper should be submitted in case of rental   accommodation. </li>

                        </ol>

                </div>







            </div>
















            </div>

    );

}


export default Admissions;