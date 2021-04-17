import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react';


const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError , setPaymentError] = useState(null);
  const [paymentSuccess , setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
       setPaymentError(error.message);
       setPaymentSuccess(null);
    } else {
       setPaymentSuccess(paymentMethod.id);
       setPaymentError(null);
    }
  };

  return (
     <div>
          <form style={{width:'500px',border:'1px solid gray',borderRadius:'10px'}} className="m-5 p-5" onSubmit={handleSubmit}>
            <CardElement/>
            <button className="m-2 p-1" type="submit" disabled={!stripe}>
              Pay
            </button>
          </form>
          {
              paymentError && <p style={{color: 'red'}} className="text-center m-5 p-5" >{paymentError}</p>
          }
          {
              paymentSuccess && <p style={{color: 'green'}} className="text-center m-5 p-5" >Your payment was successfully.</p>
          }
     </div>
  );
};

export default SimpleCardForm;