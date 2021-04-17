import React from 'react';
import trailClass from '../../../images/TrailClass (1).jpg';
import './TrailClass.css';

const TrailClass = () => {
    return (
        <div>
            <section className="row d-flex mt-5 pt-5 bg-light w-100 style">
                <div className="col-md-6">
                    <img className="img" style={{ height:'550px',marginLeft:'60px' }} src={trailClass}/>   
                </div> 
                <div className="col-md-4 mt-3 pt-3" style={{marginLeft:'150px'}}>
                    <div>
                    <h1> Request A Tutors <br/> Class for Free Trail</h1>
                    </div>
                    <div className="mt-3 pt-3">
                        <small>The first online tutors database for the students who need tutors. Search for tutors and tuitions in Bangladesh. Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.<br/>Schools and universities are using Google's products, programs, and philanthropy to help them improve learning and innovation.Education. Every child has the right to learn. A smiling young student holds a small chalkboard in ...</small>
                    </div>
                    <div className="mt-3 pt-3">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrailClass;