import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imgStorageKey = '66891e648388c01735d86b75d6397ea8';



    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())

            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added sucessfully')
                                reset();
                            }
                            else {
                                toast.error('Fail to added')
                            }

                        })

                }
                console.log('imgbb', result);
            })

        console.log("data", data);

    }

    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>

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
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600"> errors.email.message </span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className='select input-bordered w-full max-w-xs'>
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}


                            >{service.name}</option>)

                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'

                            },

                        })}
                    />
                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}


                    </label>
                </div>

                <input className='btn w-full max-w-xs ' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;