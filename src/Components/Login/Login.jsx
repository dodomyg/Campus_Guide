import React from 'react';
import "./Login.css";
import Img2 from "../../assets/undraw_scrum_board_re_wk7v(1).svg"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className='box'>
        <div className='left-half'>
          <h1>Login</h1>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Email' />
            <label htmlFor="name">Password</label>
            <input type="password" name='password' placeholder='Password' />
            <button type="submit">Login</button>
          </form>
          <div className='footer'>
            <p>Not registered yet?</p>
            <span><Link to='/signup'>Sign Up</Link></span>
          </div>
        </div>
        <div className='right-half'>
            <img src={Img2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Login;
