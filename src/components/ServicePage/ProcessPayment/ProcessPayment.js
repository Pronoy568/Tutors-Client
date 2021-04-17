import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Ie2CaCs8XJQJ4B6TpIBXdAoQL4iXyrnIfBCu5sFUWUfpTxBkHrLtFL1WfZUmsFmoTvAUYV4TgXKxMgnwSXmRK2K0041sfOxIe');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm  ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;