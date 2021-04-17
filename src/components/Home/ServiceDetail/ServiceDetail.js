import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServiceDetail = () => {

    const [services , setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])

    return (
        <section>
            <div className="container m-5 p-5">
                <h1 className="text-center mb-3" style={{color: '#1CC7C1'}}>Our service</h1>
                <div className="row m-5 p-5">
                  {
                      services.map(service => <Service service={service}></Service>)
                  }
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;