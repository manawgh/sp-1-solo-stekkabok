function Room ({name, image, price}) {
  
  return (
    <div className='room'>
      <img src={image}></img>
      <p className='number'>{name}</p>
      <p className='price'>{price/10} ISK</p>
    </div>
  )
}

export default Room