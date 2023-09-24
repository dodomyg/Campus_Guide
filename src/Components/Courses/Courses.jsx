import React from 'react'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='courses'>
        <h1>Explore Exams</h1>
        
        <div className='exams'>
        <div className='mba'>
            <h1>MBA Exams</h1>
            <ul>
                <li>CAT</li>
                <li>MAT</li>
                <li>XAT</li>
                <li>SNAP</li>
                <li>NMAT</li>
                <li>IBSAT</li>
                <li>CMAT</li>
                <li>ATMA</li>
                <li>MICAT</li>
                <li>IIFT</li>
                <li>TANCET</li>
            </ul>
        </div>
        <div className='mba'>
            <h1>Engineering Exams</h1>
            <ul>
                <li>JEE MAINS</li>
                <li>JEE ADVANCE</li>
                <li>BITSAT</li>
                <li>VITEE</li>
                <li>BJGE</li>
                <li>CET</li>
                <li>PARA ET</li>
                <li>GATE</li>
                <li>UPSCE</li>
                <li>OPSCE</li>
                
            </ul>
        </div>
        <div className='mba'>
            <h1>Medical Exams</h1>
            <ul>
                <li>NEET</li>
                <li>AIMS</li>
                <li>JIPMER</li>
                <li>AIPMCET</li>
            </ul>
        </div>
        <div className='mba'>
            <h1>Competitive Exams</h1>
            <ul>
                <li>UPSC</li>
                <li>SSC CGL</li>
                <li>SSC</li>
                <li>CTET</li>
                <li>SBI POO</li>
                <li>SBI Clerk</li>
                <li>NTSE</li>
            </ul>
        </div>
        <div className='mba'>
            <h1>Law Exams</h1>
            <ul>
               <li>AP LAWSEET</li>
               <li>CLAT</li>
               <li>LSAT India</li>
               <li>AILET</li>
            </ul>
        </div>
        
        </div>
      
    </div>
  )
}

export default Courses
