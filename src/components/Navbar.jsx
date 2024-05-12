import React from "react";

function Navbar(){


    return (

        <div class="w-full flex h-12 justify-around bg-teal-200">
                    <div class="flex h-full  items-center">
                        <div class="h-full  px-4">
                            <img class="h-full rounded-3xl w-40" src="https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?rs=1&pid=ImgDetMain" alt=""></img>
                        </div>
                        <h1>mozoX</h1>
                    </div>
                    <div class="hidden lg:flex items-center ">
                        <div class="h-full p-2" >Home</div>
                        <div class="h-full p-2">About US</div>
                        <div class="h-full p-2">Contact US</div>
                        <div class="h-full p-2">Admissions</div>
                    </div>

        </div>

    );




}
export default Navbar;