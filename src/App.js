import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Hero from './Components/Hero/Hero'
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Colleges from './Components/Colleges/Colleges'
import CollegePage from './Components/CollegePage/CollegePage'

import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'


function App() {

  
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Hero/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/colleges' element={<Colleges/>} />
      <Route path='/exams' element={<Courses/>} />
      <Route exact path='/colleges/:collegeIndex' element={<CollegePage/>} />
      </Routes>
      
    </div>
  )
}

export default App
