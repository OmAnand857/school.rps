import { register } from 'swiper/element/bundle';
register();



function Slider(){

    return(
        <swiper-container
        height="500px"
        loop="true"
        speed="1000"
        slides-per-view="1"
        autoplay="true"
        effect="coverflow"
        flip-effect-slide-shadows="false"
        >
        <swiper-slide ><img class="h-[80vh] w-full" src="https://th.bing.com/th/id/OIP.zvTH42gSclJtNydj25IWbAHaE7?rs=1&pid=ImgDetMain" alt=""/></swiper-slide>
        <swiper-slide><img class="h-[80vh] w-full" src="https://th.bing.com/th/id/OIP.-HfonxP-D8AyF3E98ZREZAHaEo?rs=1&pid=ImgDetMain" alt=""/></swiper-slide>
        <swiper-slide><img class="h-[80vh] w-full" src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain" alt=""/></swiper-slide>
      </swiper-container>
    )
}
export default Slider;