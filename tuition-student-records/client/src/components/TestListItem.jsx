import React from 'react'
import { Link } from 'react-router-dom'

export const TestListItem = ({test}) => {
    const date = test.date.split("T")[0]
  return (
    <div className='testListItem'>
      <b>{test.name}</b>
      <p>{date}</p>
      <b>{test.marks}</b>
      <Link to={"/result/test/"+test._id} ><button>View</button></Link>
      
    </div>
  )
}
