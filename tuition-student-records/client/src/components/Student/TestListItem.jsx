import React from 'react'
import { Link } from 'react-router-dom'

export const TestListItem = ({test}) => {
 const date = test.test.date.split("T")[0]
  return (
    <div className='testListItem'>
      <Link id="link" to={"/test/"+test.test._id} ><b>{test.test.name}</b></Link>
      <p>{date}</p>
      <b>{test.marks}</b>      
    </div>
  )
}
