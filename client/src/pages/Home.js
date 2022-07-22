import React from 'react'
import "./Home.css"
import BannerImg from '../images/home_banner.png'



function Home() {
  return (
    <div className='home'>
        <div className='home__container'> 
            <img className='home__image' src={BannerImg} alt='Gen 2 Banner'></img>
            {/* <p className='home__imageDetails'>gen 2 flies availible</p> */}
        </div>

       {/* <div className='home__row'>
            <div className='home__banner'>
               <Product 
               title=

            </div>
        </div> */}
          {/*<div className='home__row'>
            <div className='home__banner'>
            
            </div>
        </div>
        <div className='home__row'>
            <div className='home__banner'>
            
            </div>
        </div>
        <div className='home__row'>
            <div className='home__banner'>
            
            </div>
        </div> */}
            
    </div>
  )
}

export default Home