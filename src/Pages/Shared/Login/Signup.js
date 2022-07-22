import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import useToken from '../../../Hooks/UseToken';

const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const [token] = useToken(user || gUser);

    let errorElement;
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (gError || error || updateError) {
        errorElement = <div>
            <p className='text-red-500'>Error: {error?.message || gError?.message}</p>
        </div>
    }

    if (token) {
        navigate('/appointment');
    }
    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log("update done");
        navigate('/appointment')
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign-Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'

                                    },

                                })}
                            />
                            <label className="label">

                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}


                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'

                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">errors.email.message </span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">errors.email.message </span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: 'Password is required must be 6 character '

                                    },
                                    pattern: {
                                        value: /[a-zA-Z0-9-]/,
                                        message: 'error message'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        {/* {errors.firstName?.type === 'required' && "First name is required"}

                    <input {...register("lastName", { required: true })} />
                    {errors.lastName && "Last name is required"} */}
                        {errorElement}
                        <input className='btn w-full max-w-xs ' type="submit" value="Signup" />
                    </form>

                    <p> <small>Already have an account.? <Link className='text-red-500 ' to="/login">Please Login </Link></small>  </p>


                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn btn-accent"
                    >CONTINUE WITH GOOGLE </button>




                </div>
            </div>
        </div>
    );
};

export default Signup;