import React from 'react'
import { Link } from 'react-router-dom'

export const StudentsofTest = ({res}) => {

  return (
    <div className='testListItem'>
      <Link id="link" to={"/student/"+res.student._id} ><b>{res.student.name}</b></Link>
      <p>{res.student.grade}</p>
      <b>{res.marks}</b>      
    </div>
  )
}
