import Room from './Room';
import './List.css'

function List ({availableRooms, days, triggerWarning}) {

  return (
    <div className='room-list'>
      {availableRooms.map( room => <Room key={room.name} name={room.name} prod_id={room.prod_id} image={room.imgPath} price={room.price} desc={room.desc} sleeps={room.sleeps} days={days} triggerWarning={triggerWarning}/>)}
  </div>
  )
}

export default List