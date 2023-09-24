import React from 'react'
import "./Navbar.css"
import Img from  "../../assets/Dlogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {



  return (
    <div className='navbar'>
      <div className='logo'>
            <img src={Img} alt='gg' />
           <div className='content'>
           <h3>Campus Guide</h3>
            <p>Get into your dream college</p>
           </div>
      </div>
      <div className='nav'>
      <ul>
        <Link to='/home' style={{textDecoration:"none",color:"black"}}><li>HOME</li></Link>
        <li><Link to='/colleges' style={{textDecoration:"none",color:"black"}}>COLLEGES</Link></li>
        <li><Link to='/exams' style={{textDecoration:"none",color:"black"}}>EXAMS</Link></li>
        <li><Link to='/login' style={{textDecoration:"none",color:"black"}}>LOGIN</Link></li>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar
