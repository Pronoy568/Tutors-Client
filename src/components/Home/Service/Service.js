import React from 'react';
import './Service.css';

const Service = ({service}) => {
    return (
        <div className="col-md-4 text-center">
           <img style={{height: '180px',borderRadius: '25px'}} className="image" src={service.imageURL} alt="" />
           <h5 className="mt-3 mb-3">{service.name}</h5>
           <p className="text-secondary">lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor incididunt ut lab.</p> 
        </div>
    );
};

export default Service;