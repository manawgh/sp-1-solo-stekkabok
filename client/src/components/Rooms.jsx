import { useState } from 'react';
import { toOrdinal, requestCheckout } from '../helper_funcs';
import Checkout from './Checkout';
import './Rooms.css';

function Rooms ({availableRooms, checkAvailRooms}) {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(2);

  function handleSubmit (event) {
    event.preventDefault();

    // creating the 'days' property of the booking request
    const arrayOfDays= [];
    const start = toOrdinal(startDate);
    const end = toOrdinal(endDate);
    for (let i=start; i<=end; i++) {
      arrayOfDays.push(i);
    }

    // building the booking request
    const bookingRequest = {
      sleeps: parseInt(guests),
      days: arrayOfDays
    }

    checkAvailRooms(bookingRequest);
  }

  async function handleClick () {
    requestCheckout({name: 'Room 1', price: 1500000});
  }

  return (
    <div className="section rooms">

      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Arrival</label>
            <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)}/>
          </div>
          <div>
            <label>Departure</label>
            <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)}/>
          </div>
          <div>
            <label>Guests</label>
            <input type="number" value={guests} onChange={(event) => setGuests(event.target.value)} placeholder='2' />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

      <div className='room-list'>
        {availableRooms.map( room => <Room key={room.name} name={room.name} image={room.imgPath} price={room.price} />)}
      </div>

    </div>
  )
}

function Room ({name, image, price}) {
  
  return (
    <div className='room'>
      <img src={image}></img>
      <p className='number'>{name}</p>
      <p className='price'>{price/10} ISK</p>
    </div>
  )
}

export default Rooms