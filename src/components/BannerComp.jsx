import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function BannerComp(props){
let back = "url" + "(" + props.image + ")";
        return(

                
            <div  class="relative bg-no-repeat bg-center bg-cover w-full h-[60vh] md:h-[100vh]" style={{backgroundImage:back}}>


        </div>


        );

}


export default BannerComp;