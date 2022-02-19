import React from 'react'

export const StudentListItem = ({student}) => {
  return (
    <div className='ListItem'>
      {/* <img src='' alt='profileimg'/> */}
      <p>{student}</p>
      <button>View</button>
    </div>
  )
}
