import React from 'react';
import center from '../../../../assets/images/treatment.png'
const CenterBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mx-10">
                    <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary uppercase text-white font-bold">Get Started</button>
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <img src={center} className=" h-80 rounded-lg shadow-2xl" />


                </div>
            </div>
        </div>
    );
};

export default CenterBanner;