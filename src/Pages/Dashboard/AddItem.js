
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://glacial-hamlet-48280.herokuapp.com/part`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(`Parts add Successfully`);

            })

        console.log(data)
    };


    return (
        <div>

            {/* <div className='w-50 mx-auto mt-5'>

                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Email ' type="email" {...register("email")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Supplier Name ' type="text" {...register("suppllier")} />
                    <input className='mb-2' placeholder='Available' type="number" {...register("available")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input value="Upload Data" type="submit" />
                </form>
            </div> */}
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <h3 >Add New Item</h3>
                <div class="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Email ' type="email" {...register("email")} />
                        <textarea class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Description' {...register("description")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Price' type="number" {...register("price")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Minimum Order Quantity ' type="text" {...register("minimum_order_quantity")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Available Quantity' type="number" {...register("available_quantity")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                        <input class="input input-bordered input-accent w-full max-w-xs mb-2 bg-info" value="Upload Data" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddItem;