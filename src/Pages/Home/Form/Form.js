import React from 'react';
import appoin from '../../../assets/images/appointment.png';


const Form = () => {
    return (
        <div style={{ background: `url(${appoin})` }} className=''>
            <div className='text-center py-8'>
                <h4 className='text-xl text-accent font-bold'>Testimonials</h4>
                <h2 className='text-4xl text-white'>What our patients say</h2>
            </div>
            <div className='text-center my-8 pb-8 '>
                <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs my-2 " /><br />
                <input type="text" placeholder="Subject " className="input input-bordered input-primary w-full max-w-xs my-2 " /><br />
                <textarea className="textarea textarea-accent w-full max-w-xs" placeholder="Your massage Type here"></textarea><br />
                <button className="btn btn-accent uppercase text-white font-bold">Submit</button>
            </div>
        </div>
    );
};

export default Form;