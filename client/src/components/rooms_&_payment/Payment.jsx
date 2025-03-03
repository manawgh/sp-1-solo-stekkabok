import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { requestCheckout } from '../../helper_funcs';
import './Payment.css';

function Payment () {

  const [clientSecret, setClientSecret] = useState('');
  const stripePromise = loadStripe('pk_test_51QxRTwCGr4KIB7NcBkCAmeZQSwZX5sNq0V0O4OaOdnzxnJ3xAyWRT9hOE0nKN73f6lsrQfpSM0cuIu6wTrNNbBr500rorDyi3Z');
  const { name, prod_id, price, days, nights } = useLocation().state.from;

  useEffect( () => {
      requestCheckout({name, prod_id, price, days, nights}).then( secret => {
        setClientSecret(secret);
      }) }, []);

  return (
    <div id="payment">
      { stripePromise && clientSecret && (
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{clientSecret}}>
        <EmbeddedCheckout/>
      </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export default Payment
