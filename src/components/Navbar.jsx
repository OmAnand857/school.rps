import React from "react";
import { Link } from "react-router-dom";
function Navbar(){


    return (

            <div class="h-20 bg-[#1B7242] w-full flex justify-around items-center z-10 fixed top-0">
                            <div class="h-full w-[28vw] lg:w-[16vw]">
                            <Link to="/" style={{textDecoration:"none",color:"whiite"}}><img class="object-contain  h-full w-full" src="./RPS RAIPUR.png" alt=""/></Link>
                            </div>
                            <div class="hidden h-full lg:flex text-white items-center gap-6">
                            <div  class="cursor-pointer"><Link to="/" style={{textDecoration:"none",color:"whiite"}}>Home</Link></div>
                            <div  class="cursor-pointer"><Link to="/about" style={{textDecoration:"none",color:"whiite"}}>About Us</Link></div>
                            <div  class="cursor-pointer"><Link to="/schoollife" style={{textDecoration:"none",color:"whiite"}}>School Life</Link></div>
                            <div class="cursor-pointer" ><Link to="/admissions" style={{textDecoration:"none",color:"whiite"}}>Admissions</Link></div>
                            <Link to="/news" style={{textDecoration:"none",color:"whiite"}}><div  class="cursor-pointer"> News & Updates</div></Link>
                            <Link to="/gallery" style={{textDecoration:"none",color:"whiite"}}><div  class="cursor-pointer">Gallery</div></Link>
                            </div>



            </div>




    );




}
export default Navbar;