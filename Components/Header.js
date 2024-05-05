import React from 'react'
import Image from 'next/image'

import desktop1 from '../public/desktop1.jpg'
import logo from '../public/logo.png'
import desktop2 from '../public/desktop2.jpg'
import desktop3 from '../public/desktop3.png'
import desktop4 from '../public/desktop4.png'
import desktop5 from '../public/desktop5.png'
import desktop6 from '../public/desktop6.png'



const Header = () => {
  return (
    <>
      <div id="container">
    
    <div id="nav">

        <Image id="logo"  src={logo}  alt='logo' />
        
  
        <button id="btn"  type="submit">Enter Now</button>
    </div>



    <div id="tweetbox">
        
    </div>
   </div>

   
    
    </>
  )
}

export default Header