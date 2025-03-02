import { useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentElement } from '@stripe/react-stripe-js'

function Checkout ({name, price}) {

  return (
    <div id="checkout">
      <PaymentElement/>
    </div>
  )
}

export default Checkout