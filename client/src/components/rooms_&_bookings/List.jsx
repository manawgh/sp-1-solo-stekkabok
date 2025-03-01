import Room from './Room';

function List ({availableRooms}) {

  return (
    <div className='room-list'>
      {availableRooms.map( room => <Room key={room.name} name={room.name} image={room.imgPath} price={room.price} />)}
  </div>
  )
}

export default List