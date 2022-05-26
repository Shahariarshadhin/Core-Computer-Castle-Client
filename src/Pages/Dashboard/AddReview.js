import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user, loading, error] = useAuthState(auth);

    const addReview = event => {
           event.preventDefault();
            const review = {
              
                name : event.target.name.value,
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
                    <input type="text" name="name" placeholder="Your Name"  class="input input-bordered input-accent w-full max-w-xs  mb-3" />
                    
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














// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// // import { useForm } from "react-hook-form";
// // import { useQuery } from 'react-query';
// import { toast } from 'react-toastify';
// // import Loading from '../Shared/Loading';

// const AddReview = () => {

//     const [user, loading, error] = useAuthState(auth);

//     const addReview = event => {
//             event.preventDefault();
//             const review = {
              
//                 buyerName: user.displayName,
//                 review: event.target.review.value,

//             }
//             fetch('http://localhost:5000/review', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(review)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     toast.success('Review successfully added')
//                 })


//         }
 
//     }
//     // if (isLoading) {
//     //     return <Loading></Loading>

//     // }

//     return (
//         <div>

//             <div class="card-body">
//                 <h2 class="text-center text-2xl font-bold">Add Your Review</h2>

//                 <form onSubmit={addReview}>
//                  <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered input-accent w-full max-w-xs  mb-3" />
                    
//                     <input type="text" name="address" placeholder="Address" class="input input-bordered input-accent w-full max-w-xs mb-3" />
//                     <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs mb-3" />
//                     <input type="submit" value="Confirm" class="input input-bordered input-accent w-full max-w-xs mb-3 btn btn-info" />
//                 </form>



//             </div >
//         </div>
//     );
// };

// export default AddReview;














































































// // import React from 'react';
// // import { useForm } from "react-hook-form";

// // const AddReview = () => {

// //     const { register, handleSubmit } = useForm();
// //     const onSubmit = data => {
// //         const url = `http://localhost:5000/review`;
// //         fetch(url, {
// //             method: 'POST',
// //             headers: {
// //                 'content-type': 'application/json'
// //             },
// //             body: JSON.stringify(data)
// //         })
// //             .then(res => res.json())
// //             .then(result => {
// //                 console.log(result)
// //             })

// //         console.log(data)
// //     };


// //     return (
// //         <div>

// //             <div className='w-50 mx-auto mt-5'>
// //                 <h3 >Add your valuable Review</h3>
// //                 <form onSubmit={handleSubmit(onSubmit)}>
// //                     <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
// //                     <input className='mb-2' placeholder='Email ' type="email" {...register("email")} />
// //                     <textarea className='mb-2' placeholder='Description' {...register("description")} />
// //                     <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
// //                     <input className='mb-2' placeholder='Supplier Name ' type="text" {...register("suppllier")} />
// //                     <input className='mb-2' placeholder='Available' type="number" {...register("available")} />
// //                     <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
// //                     <input value="Upload Data" type="submit" />
// //                 </form>
// //             </div>

// //         </div>
// //     );
// // };

// // export default AddReview;