import React, { useState } from 'react'
import "./Colleges.css"
import List from "../../List.json"
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';


const Colleges = () => {
 

  

  const [search , setSearch] = useState("");

  
  
  return (
    <div className='colleges-outer'>
      <h1>Browse colleges below</h1>
      <input type='text' name='search' placeholder='Search for Colleges'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      
      />
      <div className='colleges'>
     {List.filter((college,index)=>{
      return search.toLowerCase()=== '' ? college : college.college_name.toLowerCase().includes(search);
     }).map((college,index)=>(
      <div className='box' key={index}>
                    <SchoolIcon/>
                    <h3><Link style={{textDecoration:"none",color:"black"}} to={`/colleges/${index}`}>{college.college_name}</Link></h3>
                    <p>{college.City} , {college.State}</p>
             
                  </div>
     ))}
              
      </div>
      
    </div>
  )
}

export default Colleges
