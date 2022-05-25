import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';

import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3564CsvPi6AezQhgzhTuIvz20rJ2V6OmhmYj6WyQ5tF614juITO9CV6el3Tai49aYIVB40sicI13mPDEOr8p4v00vnOZyBhj');

const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/buying/${id}`;

    const { data: order, isLoading } = useQuery(['buying', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 className='text-[#16a34a]'>Hello,{order.buyerName}</h2>
                    <h2 class="text-center text-1xl font-bold">Please pay for <span className='text-purple-500'>{order.name}</span></h2>
                    <p>Pay Amount : {order.price}</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-8 mx-auto">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;