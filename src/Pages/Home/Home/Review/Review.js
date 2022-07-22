import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-200 ">
            <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='mx-10 mb-5   flex items-center'>
                <figure className='ring ring-primary ring-offset-base-200 rounded-full w-16 mr-5'><img src={review.img} alt="Shoes" /></figure>
                <div className=''>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;