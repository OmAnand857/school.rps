

function InfinitySlider(){

    const year = new Date().getFullYear();

    return(

        <div className="w-[100%] h-[40px] bg-[#48AD46] z-10 fixed top-0 lg:top-[40px]">

                    <div className="w-[90%] lg:w-[80%] h-full bg-[#48AD46] relative mx-auto overflow-hidden">

                            <div className=" infinitySlider flex gap-4 absolute  text-white bg-[#48AD46]  h-full w-max  items-center">
                                    <div className="bg-[#308B2E] rounded shadow-inner p-1 ">
                                        Apply Now
                                    </div>
                                    <div className="bg-[#308B2E] rounded shadow-inner p-1 ">
                                        <span>Admission open for academic year {year}-{year+1}</span>
                                    </div>
                                    <div className="bg-[#308B2E] rounded shadow-inner p-1 ">
                                        <span>Please contact +9128232328|+29121291902 for admission related queries</span>
                                    </div>
                            </div>

                    </div>
        </div>
    )

}

export default InfinitySlider;