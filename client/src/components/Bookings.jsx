
import Form from './rooms_&_bookings/Form';
import List from './rooms_&_bookings/List';
// import Checkout from './rooms_&_bookings/Checkout';
// import { requestCheckout } from '../helper_funcs';
import './Bookings.css';

function Bookings ({checkAvailRooms, availableRooms}) {

  /* async function handleClick () {
    requestCheckout({name: 'Room 1', price: 1500000});
  } */

  return (
    <div className="bookings">
      <Form checkAvailRooms={checkAvailRooms}/>
      <List availableRooms={availableRooms}/>
    </div>
  )
}

export default Bookings