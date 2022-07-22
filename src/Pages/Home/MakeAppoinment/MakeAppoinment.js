import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center  items-center mt-40'>
            <div className='flex-1'>
                <img className='mt-[-80px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-accent py-2'>Appointment</h3>
                <h2 className='text-3xl text-white font-bold'>Make an appointment Today</h2>
                <p className=' text-white py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-accent uppercase text-white font-bold">Get Started</button>
            </div>
        </section>

    );
};

export default MakeAppoinment;