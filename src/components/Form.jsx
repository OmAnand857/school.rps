import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {useRef} from "react";

function Form(){

    const year = new Date().getFullYear();

    const popUpRef = useRef();

    useGSAP(()=>{
        gsap.fromTo(".popUp",{
            y:40,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.5,
            delay:0.5
        })
    },{scope:popUpRef});


    return (
        <div ref={popUpRef}>
        <div  class="popUp w-[90%] mx-auto my-8 p-4 lg:w-[350px] lg:absolute top-[20%] left-[65%] z-[6] bg-[#000000cf]  rounded-lg text-white flex flex-col justify-around">
        <h1 class=" text-3xl font-[Open Sans] my-4 text-center">Admission Contact Form for {year+'-'+(year+1)}</h1>
            
            <div class="flex gap-[1vw]">
                    <div class="ml-0 w-[100%]"><label for="studentName" >Student Name</label><br/>
                        <input type="name" class="border-black border-2 rounded p-3 w-full text-black"  id="studentName" type="text"></input>
                    </div>
                <div class="mr-0 ml-auto w-[100%]">
                <label for="fatherName">Father Name</label><br/>
                <input  class="border-black border-2 rounded p-3 text-black w-full"  id="fatherName" type="text/name"></input>
                 </div>
            </div>
            <div class='flex flex-col'>
            <label for="email">Email</label>
            <input class="border-black border-2 rounded p-3 text-black"  id="email" type="email"></input>
            </div>
            <div class='flex flex-col'>
            <label for="mobileNumber">Mobile Number</label>
            <input class="border-black border-2 rounded p-3 text-black" id="mobileNumber" type="number"></input>
            </div>
            <div class='flex flex-col'>
            <label for="class">Class</label>
            <input class="border-black border-2 rounded p-3 text-black"  id="class" ></input>
            
            </div>
            <button class="w-full mt-[10px] p-4 bg-[#1B7242] text-xl text-white">Submit</button>

        </div>

        </div>

    )


}


export default Form;