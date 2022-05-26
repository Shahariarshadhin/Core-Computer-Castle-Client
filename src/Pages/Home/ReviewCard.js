import React from 'react';

const ReviewCard = ({ review }) => {

    const { name, yourReview, ratings } = review;

    return (
        <div>



            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{name}</p>

                    <p>{yourReview}</p>
                    <p>Ratings :{ratings}</p>

                </div>
            </div>

        </div>
    );
};

export default ReviewCard;