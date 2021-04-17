import React, { useState } from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';

const ServiceCard = ({data,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <img style={{ height:'180px',borderRadius:'15px'}} src={data.img} />
                    <h5 className="card-title" style={{color:'#1CC7C1'}}>{data.subject}</h5>
                    <p>{data.time}</p>
                    <p>{data.price}</p>
                    <button onClick={openModal} className="btn btn-primary text-uppercase">Add</button>
                    <ServiceForm modalIsOpen={modalIsOpen} SelectedOn={data.subject} closeModal={closeModal} date={date}></ServiceForm>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;