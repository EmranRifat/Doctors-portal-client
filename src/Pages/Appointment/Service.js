import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, Price } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  m-10">
            <div className="card-body text-center">
                <h2 className=" text-xl font-bold text-accent">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{slots.length} space Available</p>
                <p><small> Price: $ {Price}</small></p>

                <div className="card-actions justify-center">
                    <label
                        htmlFor="my-modal-6"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className=" btn btn-sm  font-bold text-white bg-gradient-to-r from-accent to-secondary border-none">Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Service;