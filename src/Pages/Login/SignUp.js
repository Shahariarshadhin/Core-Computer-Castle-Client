import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || eUser);


    const navigate = useNavigate();

    let signInerror;

    if (loading || eLoading || updating) {
        return <button className="btn loading">loading</button >
    }

    if (error || eError || updateError) {
        signInerror = <p>{error?.message || eError?.message || updateError?.message}</p>
    }

    if (token) {
        // console.log(user);
        navigate('/inventory');
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update Done')

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label >
                            <input type="text"
                                placeholder="your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {

                                    required: {
                                        value: true,
                                        message: 'Name is Required'

                                    }
                                })}
                            />
                            <label class="label" >
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.name.message}</span>}
                                {/* {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{error.email.message}</span>} */}


                            </label >
                        </div >

                        <div class="form-control w-full max-w-xs" >
                            <label class="label" >
                                <span class="label-text" > Email</span >

                            </label >
                            <input type="email"
                                placeholder="your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is Required'

                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label" >
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500" > {errors.email.message}</span >}


                            </label >
                        </div >
                        <div class="form-control w-full max-w-xs" >
                            <label class="label" >
                                <span class="label-text" > Password</span >

                            </label >
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'Password is Required'

                                    },
                                    minLength: {
                                        value: 6,
                                        message: '6 Characters or more'
                                    }
                                })}
                            />
                            <label class="label" >
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500"> {error.password.message}</span>}
                                {errors.minLength?.type === 'minLength' && <span class="label-text-alt text-red-500" > {error.password.message}</span >}


                            </label >
                        </div >


                        {signInerror}
                        < input className='btn w-full max-w-xs  text-white' type="submit" value="SignUp" />
                    </form >
                    <p>Already Have an Account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                    <div class="divider" > OR</div >

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary">Continue With Google</button>


                </div >
            </div >
        </div >
    );
};

export default SignUp;