import React from 'react'


const Banner = ({banner}) => {
  return (
    <div className='mb-container'>
        <img className="mb-image" alt ='img' src={banner.img}/>
        <div className="mb-info">
            <h1 className='mb-title'>{banner.title}</h1>
        
        </div>
    </div>
  )
}

export default Banner