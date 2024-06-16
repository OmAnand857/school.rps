import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function BannerComp(props){
let back = "url" + "(" + props.image + ")";
        return(

                
            <div class="relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:back}}>
            <img class="w-full h-[60vh] md:h-[75vh]" src={props.image} alt=""></img>


       
      




        </div>


        );

}


export default BannerComp;