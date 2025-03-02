import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './components/Home'
import Facilities from './components/Facilities'
import Bookings from './components/Bookings'
import Info from './components/Info'
import Owners from './components/Owners'
import Patro from './components/Patro'
import Payment from './components/payments_page/Payment'
import NavBar from './components/NavBar'
import { getAllRooms, getAvailableRooms } from './helper_funcs'
import './App.css'

function App () {

  const [availableRooms, setAvailableRooms] = useState([]);

  // loading all rooms on first render
  useEffect( () => {
    getAllRooms().then( all => setAvailableRooms(all))
  }, []);

  // check available rooms on form submission
  async function checkAvailRooms (request) {
    getAvailableRooms(request).then( available => {
      setAvailableRooms(available);
    });
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/bookings' element={<Bookings availableRooms={availableRooms} checkAvailRooms={checkAvailRooms}/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/owners' element={<Owners/>}/>
          <Route path='/patro' element={<Patro/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
        <NavBar className="navbar"/>
      </Router>
    </>
  )
}

export default App