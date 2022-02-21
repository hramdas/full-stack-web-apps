import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({test}) => {
  console.log(test)
  return (
    <div className='ListItem'> 
      <b>{test.name}</b>
      <p >{test.date.split("T")[0]}</p>
      <Link to={"/test/"+test._id} ><button > View</button> </Link>
    </div>
  )
}
