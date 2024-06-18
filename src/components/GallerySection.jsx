


  function GallerySection(){

        return(

                <div className="w-[80vw] my-10 mx-auto">

                        <h1 className="scroll-zoomin text-3xl md:text-5xl mb-8 text-[#1B7242] text-center font-[Outfit] font-semibold uppercase">Exploring Boundless Creativity</h1>

                        <div className="w-[100%] flex flex-col md:justify-around gap-4 md:flex-row">

                                <div className=" scroll-animate w-full md:w-[33%] gap-4 flex flex-col">
                                <img className="h-[25vh]" src="https://s3.ap-south-1.amazonaws.com/file.narayanaschools-new/gallery-1701077870-767141637.jpg" alt=""></img>
                                <img className="h-[25vh]" src="https://s3.ap-south-1.amazonaws.com/file.narayanaschools-new/gallery_02-1701077899-1801523375.jpg" alt=""></img>
                                </div>

                                <div className="w-full md:w-[33%] ">
                                        <img className=" w-full h-[50vh]" src="https://s3.ap-south-1.amazonaws.com/file.narayanaschools-new/center-1701077958-41759997.jpg" alt=""></img>
                                </div>

                                <div className="scroll-animate-rev w-full md:w-[33%] gap-4 flex flex-col">
                                <img className="h-[25vh]" src="https://s3.ap-south-1.amazonaws.com/file.narayanaschools-new/gallery_03-1701077918-992889334.jpg" alt=""></img>
                                <img className="h-[25vh]" src="https://s3.ap-south-1.amazonaws.com/file.narayanaschools-new/gallery_04-1701077937-1238890582.jpg" alt=""></img>

                                </div>









                        </div>







                </div>


        );


  }



  export default GallerySection;