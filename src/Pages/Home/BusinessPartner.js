import React from 'react';
import dell from '../../images/Dell.jpg'
import msi from '../../images/MSI-Logo.png'
import samsung from '../../images/Samsung.jpg'
import lenevo from '../../images/lenevo.jpg'
import giga from '../../images/Gigabyte.png'
import intel from '../../images/Intel_logo.png'
import amd from '../../images/AMD-Logo.png'

const BusinessPartner = () => {
    return (
        <div className='mt-28 '>
            <h2 className='text-4xl font-bold text-[#34d399] mb-8'>Our Business Partner</h2>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 px-12 ">

                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={dell} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={msi} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={samsung} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={lenevo} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={giga} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={intel} alt="Shoes" /></figure>
                    </div>
                </div>
                <div class="card card-compact w-40 bg-base-100 shadow-xl">

                    <div class="card-body">
                        <figure><img src={amd} alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPartner;