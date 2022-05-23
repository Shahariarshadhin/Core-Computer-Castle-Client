import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../hooks/useParts';
import Parts from '../Parts';

import Banner from './Banner';
import OfferCard from './OfferCard';

const Home = () => {


    const [parts] = useParts();
    const parts2 = parts.slice(0, 3);
    return (
        <div>


            <Banner></Banner>
            <OfferCard></OfferCard>


            <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 px-12">
                    {
                        parts2.map(part => <Parts

                            key={part._id}
                            part={part}
                        ></Parts>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;