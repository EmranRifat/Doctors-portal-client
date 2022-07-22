import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import InfoCard from '../Info/InfoCard';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import CenterBanner from './CenterBanner/CenterBanner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <CenterBanner></CenterBanner>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;