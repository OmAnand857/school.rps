import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ForwardIcon from '@mui/icons-material/Forward';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentIcon from '@mui/icons-material/Payment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function SubNavBar(){

return (

    <div className="w-[100%] bg-[#308B2E] lg:text-xs xl:text-base h-[40px] z-10 hidden  lg:flex justify-around items-center  fixed top-0">

            <div className="flex items-center justify-around ">
                <PhoneIcon className="text-white "/>
                <span className="text-white">+91848383883/913838383282</span>
            </div>

            <div className="flex items-center justify-around">
                <EmailIcon className="text-white"/>
                <span className="text-white">rpsraipur123@gmail.com</span>
            </div>

            <div className="flex items-center justify-around">
                <ForwardIcon className="text-white"/>
                <span className="text-white">   Contact US</span>
            </div>

            <div className="flex items-center justify-around">
                <ReceiptLongIcon className="text-white"/>
                <span className="text-white">Online Admission</span>
            </div>

            <div className="flex items-center justify-around">
                <PaymentIcon className="text-white"/>
                <span className="text-white">Pay Fees Online</span>
            </div>

            <div className="flex items-center justify-around">
                <BusinessCenterIcon className="text-white"/>
                <span className="text-white">Sample Question Bank</span>
            </div>


    </div>




)



}


export default SubNavBar;