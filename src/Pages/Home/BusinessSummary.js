import React from 'react';


import { ImOffice } from "react-icons/im";
import { FiTruck } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";

const BusinessSummary = () => {
    return (
        <div className='mt-28 py-10'>

            <h2 className='text-4xl font-bold text-[#34d399] mb-2'>Your Trust Is Our Way Of Success</h2>
            <h2 className=' font-bold  mb-8'>TRY TO UNDERSTAND USERS EXPECTATION</h2>
            <progress class="progress progress-success w-40"></progress><br></br>
            <progress class="progress progress-success w-56"></progress>



            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-12 ">




                <div class="card w-50 bg-base-100 ">
                    <div class="card-body ">
                        <h3 className='text-5xl mx-auto mb-8'><ImOffice /> </h3>
                        <p className=' text-[#14b8a6] font-bold'>Whole Country</p>

                    </div>
                </div>
                <div class="card w-50 bg-base-100 ">
                    <div class="card-body">
                        <h3 className='text-5xl mx-auto'>  <FiTruck /> </h3>
                        <p className='text-3xl font-bold'>500+</p>
                        <p className=' text-[#14b8a6] font-bold'>Delivary Per Day</p>

                    </div>
                </div>
                <div class="card w-50 bg-base-100 ">
                    <div class="card-body">
                        <h3 className='text-5xl mx-auto'> <IoIosPeople /> </h3>
                        <p className='text-3xl font-bold'>4000+</p>
                        <p className=' text-[#14b8a6] font-bold'>Happy Clients</p>

                    </div>
                </div>
                <div class="card w-50 bg-base-100 ">
                    <div class="card-body">

                        <h3 className='text-5xl mx-auto'> <VscFeedback /> </h3>
                        <p className='text-3xl font-bold'>800+</p>
                        <p className=' text-[#14b8a6] font-bold'> Feedbacks</p>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default BusinessSummary;