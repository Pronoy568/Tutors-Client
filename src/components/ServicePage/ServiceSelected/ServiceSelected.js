import React from 'react';
import home from '../../../images/homeTutor.jpg';
import online from '../../../images/onlineTutor.jpg';
import groupTutor from '../../../images/groupTutor.jpg';
import ServiceCard from '../ServiceCard/ServiceCard';

const SelectedData = [
    {
        id: 1,
        img: home,
        subject: 'Home Tutoring',
        time: '1.5 Hours',
        price: '$80',
    },
    {
        id: 2,
        img: online,
        subject: 'Online Tutoring',
        time: '1.5 Hours',
        price: '$60',
    },
    {
        id: 3,
        img: groupTutor,
        subject: 'Group Tutoring',
        time: '1.5 Hours',
        price: '$50',
    }
]

const ServiceSelected = ({date}) => {
    return (
        <section>
            <h2 className="text-center mb-5" style={{color:'#1CC7C1'}}>Starting on {date.toDateString()}</h2>
            <div className="row">
                {
                    SelectedData.map(data => <ServiceCard data={data} date={date} key={data.id}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default ServiceSelected;