import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../hooks/useParts';
import Parts from '../Parts';

import Banner from './Banner';
import BusinessPartner from './BusinessPartner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import OfferCard from './OfferCard';
import Review from './Review';

const Home = () => {


    const [parts] = useParts();
    const parts2 = parts.slice(0, 3);
    return (
        <div>


            <Banner></Banner>
            <OfferCard></OfferCard>


            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8  px-12">
                    {
                        parts2.map(part => <Parts

                            key={part._id}
                            part={part}
                        ></Parts>)
                    }
                </div>
                <div className='mt-10'>
                    <Link className="input input-bordered input-accent w-60 max-w-xs mb-3 btn btn-info" to='/inventory'>See More</Link>
                </div>

            </div>
            <div>
                <BusinessSummary></BusinessSummary>
            </div>
            <div className='mt-28'>
                <h2 className='text-2xl font-bold text-[#34d399] mb-8'>What Our Customer Says</h2>
                <Review></Review>
            </div>
            <div>
                <BusinessPartner></BusinessPartner>
            </div>
            <div className='mt-28 mb-2 subscribe bg-[#0f172a] py-10'>
                <h5 className='text-white text-2xl font-bold'>Subscribe to Our Email List</h5>
                <p className='text-warning py-2'>Sign up and receive 20% Off and get exclusive access to promotions, sales events, pre-order sales & more!</p>
                <input className='py-1' placeholder="Enter email" type="email" name="email" required />
                {/* <input className='subscribe-btn mx-2 ' type="submit" value="Subscribe" /> */}
                <button class="btn btn-sm bg-[#16a34a] mx-2 py-2">Subscribe</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;