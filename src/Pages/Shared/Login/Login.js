import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import useToken from '../../../Hooks/UseToken';
import { useEffect } from 'react';



const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });

        }

    }, [token, from, navigate])

    

    // console.log('token from Login page ', token);

    if (loading || gLoading) {
        return <Loading> </Loading>;
    }
    if (gError || error) {
        errorElement = <div>
            <p className='text-red-500'>Error: {error?.message || gError?.message}</p>
        </div>
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                        value: /[a-zA-Z0-9-]/,
                                        message: 'error message'
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

                    
                        {errorElement}
                        <input className='btn w-full max-w-xs ' type="submit" value="Login" />
                    </form>

                    <p> <small>New to doctors portal- <Link className='text-red-500 ' to="/signup">Create New Account</Link></small>  </p>


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

export default Login;