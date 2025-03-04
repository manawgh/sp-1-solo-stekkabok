import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './components/Home'
import Facilities from './components/Facilities'
import Bookings from './components/Bookings'
import Info from './components/Info'
import Owners from './components/Owners'
import Patro from './components/Patro'
import Payment from './components/rooms_&_payment/Payment'
import Thanks from './components/Thanks'
import NavBar from './components/NavBar'
import './App.css'

function App () {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/bookings' element={<Bookings/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/owners' element={<Owners/>}/>
          <Route path='/patro' element={<Patro/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/thanks' element={<Thanks/>}/>
        </Routes>
        <NavBar className="navbar"/>
      </Router>
    </>
  )
}

export default App