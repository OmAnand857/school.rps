import BannerComp from './BannerComp';
import { register } from 'swiper/element/bundle';
register();



function Slider(){

    return(
        <swiper-container
        loop="true"
        speed="1500"
        slides-per-view="1"
        autoplay="true"
        effect=""
        flip-effect-slide-shadows="false"
        >
        <swiper-slide ><BannerComp image="./kiids.png"/></swiper-slide>
        <swiper-slide ><BannerComp image="./SingleGirl.png"/></swiper-slide>
        <swiper-slide ><BannerComp image="./GrooupGirls.png"/></swiper-slide>

        </swiper-container>
    )
}
export default Slider;