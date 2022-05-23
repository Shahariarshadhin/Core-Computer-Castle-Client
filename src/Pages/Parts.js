import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Parts = ({ part }) => {

    // const [parts, setParts] = useState([]);
    const { _id, name, img, description, price, minimum_order_quantity, available_quantity } = part;
    const navigate = useNavigate();

    // const handleInvDelete = id => {
    //     const proceed = window.confirm('Are you Sure?');
    //     if (proceed) {
    //         const url = (`https://agile-fjord-18815.herokuapp.com/gear/=${id}`);
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     console.log(data)
    //                     const remaining = gears.filter(gear => gear._id !== id);
    //                     setGears(remaining);

    //                 }
    //             })
    //     }

    // }

    const navigatePart = id => {
        navigate(`/part/${id}`)


    }
    return (


        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p><small>{description}</small></p>
                <p>Price: {price}</p>
                <p>Minimun Order Quantity :{minimum_order_quantity}</p>
                <p>Available Quantity :{available_quantity}</p>
                <div class="card-actions">
                    <button onClick={() => navigatePart(_id)} class="btn btn-info">Order</button>

                </div>
            </div>
        </div>






        // <div className='parts'>
        //     <img className='w-100' src={img} alt="" />
        //     <h2>{name}</h2>
        //     <p>Price: {price}</p>
        //     <p><small>{description}</small></p>
        //     <p>Minimun Order Quantity :{minimum_order_quantity}</p>
        //     <p>Available Quantity :{available_quantity}</p>


        //     {/* <button onClick={() => navigateGear(_id)} className='update-btn ' type="">Update Gear</button> */}

        //     {/* <button onClick={() => handleInvDelete(gear._id)} className='update-btn mx-2' type="">Delete</button> */}




        // </div>
    );
};

export default Parts;