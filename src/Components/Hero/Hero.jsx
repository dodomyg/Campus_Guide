import React from 'react'
import "./Hero.css"
import Img2 from "../../assets/Bg.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
     
     <div className='box'>
        <div className='content'>
            <h1>Get into your dream college in India !</h1>
            <p>
            Students, welcome to the place where you may discover your ideal college and realise your full potential. Learn about their specific course offerings, and read real student evaluations .We're here to support you in making well-informed decisions regarding your education by arming you with accurate and current information. 
            </p>
            <div className='button'>
            <button><Link style={{textDecoration:"none",color:"black"}} to='/signup'>Get Started</Link></button>
            </div>
        </div>

        <div className='img'>
            <img src={Img2} alt='' />
        </div>

     </div>
     

    </div>
  )
}

export default Hero
