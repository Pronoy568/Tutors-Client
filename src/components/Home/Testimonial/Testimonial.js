import React from 'react';

const Testimonial = ({review}) => {
    return (
        <div className="col-md-4 shadow-sm m-2" style={{borderRadius:'10px'}} >
            <div className="d-flex  align-items-center">
                <img style={{height:'100px',borderRadius:'40px'}} className="mx-3" src={review.imageURL} alt="" width="160"/>
                <div className="text-center">
                    <h6 className="text-success">{review.name}</h6>
                    <p className="m-0">{review.from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{review.comment}</p>
            </div>
       </div>
    );
};

export default Testimonial;