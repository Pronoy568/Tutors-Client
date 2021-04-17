import React from 'react';
import ProcessPayment from './ProcessPayment';
import money from '../../../images/money.jpg';

const Pay = () => {
    return (
        <div className="row bg-light">
            <div className="col-md-4 m-5">
                  <img src={money} style={{height:'400px',width:'500px',borderRadius:'10px'}}/>
            </div>
            <div className="col-md-6 m-5">
                  <h2 className="m-5">Please pay for Your tutor</h2>
                  <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
};

export default Pay;