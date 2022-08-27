import React, { useState } from 'react';
import { CardElement,useStripe,useElements} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
 
    const [cardError,setCardError]=useState('');
    const stripe=useStripe();
    const elements=useElements();
// console.log(stripe)
// console.log(elements)

    const handleSubmit=async(event)=>{
        event.preventDefault();

}
if (!stripe || !elements) {
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    return;
  }
  const card = elements.getElement(CardElement);
console.log(elements);
  if (card === null) {
    return;
  }
  
  // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = stripe.createPaymentMethod({
        type: 'card',
        card,
      });
console.log(paymentMethod);
      
      if(error){
        setCardError(error?.message||'')
      }
      else{
        setCardError('');
      }



    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError&&<p className='text-red-500'>{cardError}</p>
      }
       </>

    );
};

export default CheckoutForm;