import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Pay from '../ProcessPayment/Pay';
import ServiceMain from '../ServiceMain/ServiceMain';
import ServiceNavbar from '../ServiceNavbar/ServiceNavbar';
import ServiceSelected from '../ServiceSelected/ServiceSelected';

const ServicePage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <ServiceNavbar></ServiceNavbar>
            <ServiceMain handleDateChange={handleDateChange}></ServiceMain>
            <ServiceSelected date={selectedDate}></ServiceSelected>
            <Pay></Pay>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;