import React from 'react';
import banner from '../../images/banner1.jpeg'
import bannerbg from '../../images/bannerbg.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100" style={{ background: `url(${bannerbg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />

                <div className='mx-16'>
                    <h1 className="text-5xl text-white font-bold">Core Computer Castle</h1>
                    <p className="text-2xl text-white py-6">Providing a Wide Choice of Yours</p>
                    <button className="btn bg-[#38bdf8]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;