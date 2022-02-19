import React from 'react'

export const TestListItem = ({test}) => {
  return (
    <div className='ListItem'>
      <b>{test}</b>
      <p>2022-02-22</p>
      <button>View</button>
    </div>
  )
}
