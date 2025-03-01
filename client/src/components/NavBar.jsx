import { NavLink } from 'react-router'
import './NavBar.css'

function NavBar () {
  
  return (
    <nav className='navbar'>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/facilities">Facilities</NavLink>
      <NavLink to="/bookings">Rooms & Booking</NavLink>
      <NavLink to="/info">Practical Info</NavLink>
      <NavLink to="/owners">Fanney & Óskar</NavLink>
      <NavLink to="/patro">Patró & The Westfjords</NavLink>
    </nav>
  )
}

export default NavBar