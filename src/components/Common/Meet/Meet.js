import React from 'react';
import meet1 from '../../../images/meet (1).jpg';
import meet2 from '../../../images/meet (2).jpg';

const Meet = () => {
    return (
        <div className="row m-5 p-5 bg-light">
            <div className="col-md-4">
               <img src={meet1} style={{height: '300px'}}/>
            </div>
            <div className="col-md-4 text-center">
               <h3 style={{color: '#29c829'}}>Students will be ready for<br/> online & offline class</h3>
               <h4>We will contact soon with you </h4>
               <p style={{color: '#ff2020'}}>Take care</p>
            </div>
            <div className="col-md-4">
               <img src={meet2} style={{height: '300px'}}/>
            </div>
        </div>
    );
};

export default Meet;