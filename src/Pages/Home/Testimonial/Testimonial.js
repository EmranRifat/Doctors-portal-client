import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Home/Review/Review';



const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'California',

            img: people1


        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people2


        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people3


        },

    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between '>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-4xl'>What our patients say</h2>
                </div>
                <div>
                    <img className='w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4' >
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;