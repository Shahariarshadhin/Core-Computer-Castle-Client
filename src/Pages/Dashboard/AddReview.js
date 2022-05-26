import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth);

    const addReview = event => {
        event.preventDefault();
        const review = {

            name: event.target.name.value,
            yourReview: event.target.yourReview.value,
            ratings: event.target.ratings.value,

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Review successfully added')
            })


    }
    return (
        <div>


            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Add Your Review</h2>
                    <form onSubmit={addReview}>
                        <input type="text" name="name" placeholder="Your Name" class="input input-bordered input-accent w-full max-w-xs  mb-3" />

                        <textarea type="text" name="yourReview" placeholder="Review" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="text" name="ratings" placeholder="Ratings" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="submit" value="Confirm" class="input input-bordered input-accent w-full max-w-xs mb-3 btn btn-info" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;












