import React from 'react';

const OfferCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:px-56 mt-[-70px]'>
            <div style={{ backgroundColor: '#22d3ee' }} class="card w-80  text-primary-content">
                <div class="card-body ">
                    <h2 class="card-title justify-center text-2xl">Free <br></br> Shipping</h2>
                    <p >We will provide free shipping service in pre-payment</p>

                </div>
            </div>
            <div style={{ backgroundColor: '#4ade80' }} class="card w-80  text-primary-content">
                <div class="card-body">
                    <h2 class="card-title justify-center text-2xl">Season <br></br> Sale 5% Off</h2>
                    <p>It's time to get some offer for your pet's medicine</p>

                </div>
            </div>
            <div style={{ backgroundColor: '#fbbf24' }} class="card w-80  text-primary-content">
                <div class="card-body">
                    <h2 class="card-title justify-center text-2xl">Buy <br></br> A Gift Card</h2>
                    <p>This gift card will provide some extra offer</p>

                </div>
            </div>
        </div>
    );
};

export default OfferCard;