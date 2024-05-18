import React from "react";
import GalleryImage from "./GalleryImage";

function Gallery(){

            return(

                      <div>


                            <div class="w-full h-[60vh] relative">
                                <img class="h-full w-full" src="./GroupGallery.png" alt=""></img>
                                <div class="absolute top-[50%] left-[15%] translate-y-[-50%] ">
                                    <h1 class="text-white text-[10vw] md:text-[8vw] lg:text-[4vw] font-[Outfit] uppercase">Explore Our Visual<br/>Tapestry : <span class="text-[#FE9132]">Gallery</span></h1>
                                </div>
                            </div>



                            <div class="mx-auto h-[80px] w-[50vw] my-[5vw] flex">
                                    <button class="w-1/2 h-full bg-[#1B7242] items-center flex justify-center">
                                            <h1  class="text-white text-[2.5vw]  font-[Outfit]  uppercase">photo gallery</h1>
                                    </button>

                                 <button class="w-1/2 h-full bg-[#F2F2F2] flex justify-center items-center">
                                 <h1  class="text-black text-[2.5vw]  font-[Outfit]   uppercase">Video Gallery</h1>
                                    </button>

                            </div>





                            <div class="w-[90vw] mx-auto flex flex-wrap gap-[1vw] justify-around">




                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>
                            <GalleryImage/>








                            </div>






































                      </div>


            );



}
export default Gallery;