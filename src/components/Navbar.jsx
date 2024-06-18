import React , { useState , useEffect  } from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

function Navbar(props){
    console.log(props);

                const [toggler , setToggler] = useState(false);
                function toggleNavbar(){

                            setToggler(!toggler);
                           


                }

                useEffect(()=>{
                    
                            if(toggler===true){
                                console.log(document.getElementsByClassName('navbar-collapse')[0].classList)
                                document.getElementsByClassName('navbar-collapse')[0].classList.remove("translate-x-[100%]");
                            }
                            else{
                                document.getElementsByClassName('navbar-collapse')[0].classList.add("translate-x-[100%]");
                            }
                },[toggler])


               function handleClick(){
                        window.scrollTo(0,0);
                        const position = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
                        props.scroll(position);
               }






    return (

            <div class=" navbar h-20 bg-[#1B7242]  shadow w-[100vw] flex justify-around items-center z-10 fixed top-[40px] lg:top-[80px]">
                            <div class="h-full w-[28vw] lg:w-[16vw] z-[101]">
                            <Link to="/" style={{textDecoration:"none",color:"whiite"}} ><img class="object-contain  h-full w-full" src="./RPS RAIPUR.png" alt=""/></Link>
                            </div>


                           {toggler?    <div  onClick={toggleNavbar} className=" z-[101] lg:hidden flex items-center  text-white cursor-pointer"><h3 class='uppercase '>Close</h3> <CloseIcon className=" text-white "/></div>
                                    :<div className="lg:hidden flex items-center  text-white cursor-pointer" onClick={toggleNavbar}>
                                <h3 class='uppercase '>Menu</h3>
                                <MoreVertIcon/>
                                    </div>
                                    
                            
                            } 




                            <div class="hidden h-full lg:flex text-white items-center gap-6">
                            <div  class="cursor-pointer" onClick={handleClick}><Link to="/" style={{textDecoration:"none",color:"whiite"}}>Home</Link></div>
                            <div  class="cursor-pointer" onClick={handleClick} ><Link to="/about" style={{textDecoration:"none",color:"whiite"}}>About Us</Link></div>
                            <div  class="cursor-pointer" onClick={handleClick}><Link to="/schoollife" style={{textDecoration:"none",color:"whiite"}}>School Life</Link></div>
                            <div class="cursor-pointer" onClick={handleClick} ><Link to="/admissions" style={{textDecoration:"none",color:"whiite"}}>Admissions</Link></div>
                            <Link to="/news" style={{textDecoration:"none",color:"whiite"}}><div  class="cursor-pointer" onClick={handleClick}> News & Updates</div></Link>
                            <Link to="/gallery" style={{textDecoration:"none",color:"whiite"}}><div  class="cursor-pointer" onClick={handleClick}>Gallery</div></Link>
                            </div>


















                    <div className='lg:hidden navbar-collapse w-[100vw] h-[100vh] transition-all  translate-x-[100%] z-[100]  top-0 left-0 bg-[#1B7242] fixed flex flex-col items-center justify-center'>

                            <div class="flex flex-col gap-[1vw] items-center justify-around w-[90%] text-white h-[80vh] font-[Outfit]">

                            <Link onClick={handleClick} to="/" style={{textDecoration:"none",color:"whiite"}}><button  onClick={toggleNavbar} class="h-[10vw] w-[35vw] border-2 px-1 text-[5vw] rounded border-white">Home</button></Link>
                            <Link onClick={handleClick} to="/about" style={{textDecoration:"none",color:"whiite"}}><button onClick={toggleNavbar}  class="h-[10vw] w-[35vw] border-2 px-1 text-[5vw] rounded border-white">About Us</button></Link>
                            <Link onClick={handleClick} to="/schoollife" style={{textDecoration:"none",color:"whiite"}}><button onClick={toggleNavbar} class="h-[10vw] w-[35vw] border-2 px-1 text-[5vw] rounded border-white">School Life</button></Link>
                            <Link  onClick={handleClick} to="/admissions" style={{textDecoration:"none",color:"whiite"}}><button onClick={toggleNavbar} class="h-[10vw] w-[35vw] border-2 px-1 text-[5vw] rounded border-white">Admissions</button></Link>
                            <Link onClick={handleClick} to="/news" style={{textDecoration:"none",color:"whiite"}}><button onClick={toggleNavbar} class="h-[10vw] w-[35vw] border-2 px-1 rounded text-[5vw] border-white">News</button></Link>
                            <Link  onClick={handleClick} to="/gallery" style={{textDecoration:"none",color:"whiite"}}><button onClick={toggleNavbar} class="h-[10vw] w-[35vw] border-2 px-1 text-[5vw] rounded border-white">Gallery</button></Link>


                            </div>





                    </div>




















            </div>




    );




}
export default Navbar;