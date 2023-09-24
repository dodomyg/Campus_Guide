import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className='signup'>
      <div className='box'>
        <h1>Sign Up to find your dream college</h1>
        <form action="">
          <label htmlFor="name">Full Name</label>
          <input type="text" name='name' placeholder='Name' />
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Email' />

          <label htmlFor="name">Password</label>
          <input type="password" name='password' placeholder='Password' />

          <label htmlFor="name">Confirm Password</label>
          <input type="password" name='confirm-password' placeholder='Password' />

          <button type="submit">Sign Up</button>

        </form>
      </div>
    </div>
  )
}

export default Signup
