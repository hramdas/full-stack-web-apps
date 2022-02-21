import {useState, useEffect} from 'react'
import {records} from '../../utils/requests'
import { TestListItem } from './TestListItem'

export const TestOfStudent = ({studentResults}) => {
  const {result} = studentResults

  return (
    <>
    <div className='testListItem'>
      <b>Name</b>
      <p>Date</p>
      <b>Marks</b>      
    </div>
    <hr style={{margin:"10px auto"}} />
    {result ? result.map((res)=>{
    return <TestListItem key={res._id} test={res} mark={res.marks} />  
    })
    : <p>Loading...</p>}
    </>
  )
}
