import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card w-50 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>


        // <div className="card w-96 bg-base-100 shadow-xl d-flex">
        //     <figure className="px-10 pt-10">
        //         <img src={service.img} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{service.name}</h2>
        //         <p>{service.description}</p>

        //     </div>
        // </div>
    );
};

export default Service;