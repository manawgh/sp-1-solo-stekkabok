import Form from './rooms_&_bookings/Form';
import List from './rooms_&_bookings/List';
import './Bookings.css';

function Bookings ({checkAvailRooms, availableRooms}) {

  return (
    <div className="bookings">
      <Form checkAvailRooms={checkAvailRooms}/>
      <List availableRooms={availableRooms}/>
    </div>
  )
}

export default Bookings