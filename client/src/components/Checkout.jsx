import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51QxRU5CGQFLIT11rDpEWZOqeiJzS4mp7yyPofiprICEUaW1YXAFjOaP3nk5POrd9zSB8cgCmLHrfOpvcgzumaD9u00Xmm4AVOJ');

function Checkout () {

  const fetchClientSecret = useCallback( () => {

    return fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({name: "Room", price: 1000}),
      headers: {"Content-Type": "application/json"}
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default Checkout