
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import ReviewCard from './ReviewCard';


const Review = () => {

    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/review', {

            })
                .then(res => res.json())
                .then(data => setReviews(data));
        }

    }, [user])


    return (
        <div >




            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}

                    ></ReviewCard>
                    )
                }
            </div>





        </div>
    );
};

export default Review;



