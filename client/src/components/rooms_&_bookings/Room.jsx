import Beds from '../../../public/bed.png'
import Wifi from '../../../public/wifi.png'
import { NavLink } from 'react-router'
import './Room.css'

function Room ({name, image, price, desc, sleeps}) {

  const roomData = {name, image, price, desc, sleeps};

  return (
    <div className='room'>

      <div className="image">
        <img src={image}></img>
      </div>

      <div className="room-info">

        <p>{name}</p>
        <p>{desc}</p>
        <p>(Linen & towels are included.)</p>

        <div className='icon-container'>
          <div className="sleeps">
            <p>{sleeps}</p>
            <img className='icons' src={Beds}></img>
          </div>
          <img className='icons' src={Wifi}></img>
        </div>

        <div className='book-now'>
          <p>{price/10} ISK</p>
          <NavLink to="/payment" state={{from: roomData}}><button className='book-btn'>Book now</button></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Room