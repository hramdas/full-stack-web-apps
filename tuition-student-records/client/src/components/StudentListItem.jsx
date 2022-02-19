import React from 'react'
import { Link } from 'react-router-dom'

export const StudentListItem = ({studentdata}) => {
  const {name, picture, _id} = studentdata
  console.log(name)
  return (
    <div className='ListItem'>
      <img src={picture} alt='profileimg'/>
      <p>{name}</p>
      <Link to={"student/"+_id} ><button> View</button> </Link>
    </div>
  )
}
