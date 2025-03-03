import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import RoomZoom from './RoomZoom';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { requestCheckout } from '../../helper_funcs';
import './Payment.css';

function Payment () {

  const [clientSecret, setClientSecret] = useState('');
  const stripePromise = loadStripe('pk_test_51QxRTwCGr4KIB7NcBkCAmeZQSwZX5sNq0V0O4OaOdnzxnJ3xAyWRT9hOE0nKN73f6lsrQfpSM0cuIu6wTrNNbBr500rorDyi3Z');
  const { name, image, price } = useLocation().state.from;

  useEffect( () => {
      requestCheckout({name, price}).then( secret => {
        setClientSecret(secret);
      }) }, []);

  return (
    <div id="payment">
      <RoomZoom/>
      { stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{clientSecret}}>
        <Checkout name={name} price={price}/>
      </Elements>
      )}
    </div>
  )
}

export default Payment
