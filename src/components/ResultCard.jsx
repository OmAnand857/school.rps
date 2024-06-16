

function ResultCard(){

        return(
                    <div className=" mb-4 flex flex-col gap-[4px]    items-center justify-around">

                                <div className="h-[40vw] w-[40vw] border-[5px] border-[#9CCB7F] md:h-[10vw] md:w-[10vw] rounded-br-3xl rounded-tl-3xl">
                                    <img className="w-[100%] rounded-br-3xl rounded-tl-3xl h-[100%]" src="https://th.bing.com/th/id/OIP.BvathnsSkYkkAoPGy0skGQHaE7?rs=1&pid=ImgDetMain" alt=""></img>
                                </div>
                                <strong className=" text-[#FE3232] text-xl">99.99%</strong>
                                <span className="text-[#FE9132]">MR XYZ</span>

                    </div>


        )

}

export default ResultCard;