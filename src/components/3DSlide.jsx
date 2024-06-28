import Carousel from 'react-spring-3d-carousel';


function ThreeDSlide(){

    const slides = [
        {
          key: 1,
          content: 
          <div class=" cardElevate flex my-16 justify-center border   ">
          <div class="w-[300px] md:w-[30vw]   flex  flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
        {
          key: 2,
          content:   <div class=" cardElevate flex my-16   border justify-center ">
          <div class="w-[300px] md:w-[30vw]    flex  flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
        {
          key: 3,
          content:  <div class=" cardElevate flex my-16  border justify-center ">
          <div class="w-[300px]  md:w-[30vw]   flex flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
        {
          key: 4,
          content:  <div class=" cardElevate flex my-16  border justify-center ">
          <div class="w-[300px]  md:w-[30vw]   flex flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
        {
          key: 5,
          content:  <div class=" cardElevate flex my-16   border justify-center ">
          <div class="w-[300px] md:w-[30vw]   flex  flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
        {
          key: 6,
          content:  <div class=" cardElevate flex my-16   border justify-center  ">
          <div class="w-[300px] md:w-[30vw]   flex  flex-col  items-center   bg-white rounded p-[10px]">
              <div class="md:w-[30%] w-[100%] flex justify-center items-center"><img class="object-contain h-[100px] w-[100px] rounded-[50%]" src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain" alt=""></img></div>
              <div class=" w-[100%] flex flex-col text-left">
                  <h3 class=" text-xl md:text-3xl text-center my-2 md:text-left font-[Outfit]">Draupadi Murmu</h3>
                  <p class="text-base  font-[Open Sans]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>

              </div>
              
          </div>
    </div>
        },
       
      ];

    return(
        
        <div class="w-100 h-[400px] mb-20  mt-4  ">
            <Carousel  goToSlide={0} offsetRadius={2}  enableSwipe={true} showNavigation={true} slides={slides} />
        </div>
        

    );


}


export default ThreeDSlide;