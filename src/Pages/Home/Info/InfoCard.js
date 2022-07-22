import React from 'react';
import icon1 from '../../../assets/icons/clock.svg';
import icon2 from '../../../assets/icons/marker.svg';
import icon3 from '../../../assets/icons/phone.svg';


const InfoCard = () => {
    return (
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 text-white px-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-neutral">
                <figure className='pl-5'>
                    <img src={icon1} alt="Album" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure className='pl-5'>
                    <img src={icon2} alt="Album" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">Our Locations</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-neutral">
                <figure className='pl-5'>
                    <img src={icon3} alt="Album" />

                </figure>
                <div className="card-body">
                    <h2 className="card-title">Contract Us</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InfoCard;