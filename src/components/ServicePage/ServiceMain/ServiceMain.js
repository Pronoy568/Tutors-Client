import React from 'react';
import online from '../../../images/online.jpg';
import classImg from '../../../images/class.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ServiceMain = ({handleDateChange}) => {
    return (
        <section className="row w-100 bg-light">
            <div className="col-md-4">
                <img style={{height:'410px'}} src={online} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-3 m-5">
            <h5 style={{color: '#ff5700'}} className="text-center">Selected Starting Date</h5>
            <Calendar className="bg-secondary"
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-4">
                <img style={{height:'410px'}} src={classImg} alt="" className="img-fluid"/>
            </div>
        </section>
    );
};

export default ServiceMain;