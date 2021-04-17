import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const TestimonialDetails = () => {
    const [reviews , setReviews] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5050/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])

    return (
        <section>
            <div className="container m-5 p-5 bg-light">
                <h1 className="text-center mb-3" style={{color: '#1CC7C1'}}>Reviews</h1>
                <div className="row m-5 p-5">
                  {
                      reviews.map(review => <Testimonial review={review}></Testimonial>)
                  }
                </div>
            </div>
        </section>
    );
};

export default TestimonialDetails;