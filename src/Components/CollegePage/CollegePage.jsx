import React from 'react'
import "./CollegePage.css"
import List from "../../List.json"
import { useParams } from 'react-router-dom'

const CollegePage = () => {
    const { collegeIndex } = useParams();
  const selectedIndex = parseInt(collegeIndex);
  const selectedCollege = List[selectedIndex]
  if (!selectedCollege) {
    return <div>College not found</div>;
  }
  return (
    <div className='details'>
      <h1>College Details</h1>
      <h2>{selectedCollege.college_name}</h2>
      <span>{selectedCollege.City} , {selectedCollege.State}</span>
      <div className='bar'>
      <p>Established : {selectedCollege.established}</p>
      <p>College Type : {selectedCollege.college_type}</p>
      <p>University: {selectedCollege.University}</p>
      <p>Campus Size : {selectedCollege.campus_size}</p>
      <p>Total Faculty:  {selectedCollege.total_faculty}</p>
      <p>Total enrollments per year  : {selectedCollege.total_enrollments}</p>
      <p>Avarage fees per year : {selectedCollege.avg_fees + " ₹"}</p>
      <div className='courses'>
        <h3>Cources Offered </h3>
      {selectedCollege.Courses}
      </div>
      <div className='facilities'>
      <h3>Facilities </h3>
      {selectedCollege.Facilities}
      </div>

      <h3>Rating out of 5 by NIRF : {selectedCollege.Rating}</h3>
      
      </div>
    </div>
  );
}

export default CollegePage
