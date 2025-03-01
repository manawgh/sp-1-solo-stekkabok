import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Facilities from './components/Facilities'
import Rooms from './components/Rooms'
import Info from './components/Info'
import Owners from './components/Owners'
import Patro from './components/Patro'
import { getAllRooms, getAvailableRooms } from './helper_funcs'
import './App.css'

// SAM
// navbar over
// slider motion
// ui: calendar + cards

// DIM
// stripe

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
          <Route path='/rooms' element={<Rooms availableRooms={availableRooms} checkAvailRooms={checkAvailRooms}/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/owners' element={<Owners/>}/>
          <Route path='/patro' element={<Patro/>}/>
        </Routes>
        <NavBar/>
      </Router>
    </>
  )
}

export default App