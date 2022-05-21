import React from 'react';
import banner from '../../images/banner.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-no-repeat bg-center" style={{ background: `url(${banner})` }} >
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-6xl font-bold">Core Computer Castle</h1>
                    <p class="mb-5"></p>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;