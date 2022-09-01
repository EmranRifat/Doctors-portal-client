import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('~/src/assets/images/bg.png')] ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} style={{ height: '320px', width: '500px' }} className=" rounded-lg shadow-2xl" />
                <div className='px-5'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold">Get Started</button>
                </div>
            </div>

        </div>
        
    );
};

export default Banner;