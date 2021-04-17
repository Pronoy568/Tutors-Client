import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import TrailClass from '../TrailClass/TrailClass';
import Tutors from '../Tutors/Tutors';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceDetail></ServiceDetail>
            <TrailClass></TrailClass>
            <Tutors></Tutors>
            <TestimonialDetails></TestimonialDetails>
            <Footer></Footer>
        </div>
    );
};

export default Home;