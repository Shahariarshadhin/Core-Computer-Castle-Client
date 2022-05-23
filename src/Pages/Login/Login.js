import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || eUser);

    let signInerror;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || eLoading) {
        return <button className="btn loading">loading</button >
    }

    if (error || eError) {
        signInerror = <p>{error?.message || eError?.message}</p>
    }

    if (token) {
        console.log(user);
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

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
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.minLength?.type === 'minLength' && <span class="label-text-alt text-red-500" > {errors.password.message}</span >}


                            </label >
                        </div >


                        {signInerror}
                        < input className='btn w-full max-w-xs  text-white' type="submit" value="Login" />
                    </form >
                    <p>New to Doctors Diary? <Link className='text-blue-600' to='/signup'>Create New Account</Link></p>
                    <div class="divider" > OR</div >

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary">Continue With Google</button>


                </div >
            </div >
        </div >
    );
};

export default Login;