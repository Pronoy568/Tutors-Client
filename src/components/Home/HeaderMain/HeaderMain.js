import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';

const HeaderMain = () => {
    return (
        <section className="row bg-secondary w-100">
               <div className="col-md-4">
               <img style={{height: '400px',width: '500px'}} src={img2} />
            </div>
            <div className="col-md-4 text-center m-5 text-white">
               <h1>Find The Perfect <br/>   Tutor for <br/> Online & Offline</h1>
               <br/>
               <h6 style={{color: '#8be5f3'}}>EDUCATION NOW MORE EASY</h6>
            </div>
            <div className="col-md-3">
               <img style={{height: '400px',width: '410px'}} src={img1} />
            </div>
        </section>
    );
};

export default HeaderMain;