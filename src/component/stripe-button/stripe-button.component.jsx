import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_V7c2pro3Gl8QFXabOrBlb67o00TyJ8VNA1';
  
    const onToken = token => {
      console.log(token);
      alert('Payment Succesful!');
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='MyStore Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };
  
  export default StripeCheckoutButton;