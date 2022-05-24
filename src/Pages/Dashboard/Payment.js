import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-[#16a34a]'>Hello,{order.buyerName}</h2>
                    <h2 class="text-center text-1xl font-bold">Please pay for <span className='text-purple-500'>{order.name}</span></h2>
                    <p>Pay Amount : {order.price}</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-8">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Payment;