import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Myprofile = () => {

    const [user, loading, error] = useAuthState(auth);


    const handleOrder = event => {
        event.preventDefault();
        const ownUser = {
            buyer: user.email,
            buyerName: user.displayName,
            education: event.target.education.value,
            location: event.target.location.value,
            linkedIn: event.target.linkedIn.value,
            phone: event.target.phone.value



        }
        fetch('https://glacial-hamlet-48280.herokuapp.com/userdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ownUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Information successfully added')
            })




    }
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <form onSubmit={handleOrder}>
                        <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered input-accent w-full max-w-xs  mb-3" />
                        <input type="email" name="email" disabled value={user?.email} class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="text" name="education" placeholder="Education" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="text" name="location" placeholder="Location" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="text" name="linkedIn" placeholder="LinkedIn" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                        <input type="submit" value="Confirm" class="input input-bordered input-accent w-full max-w-xs mb-3 btn btn-info" />
                    </form>
                </div>
            </div>








        </div>
    );
};

export default Myprofile;