import {useState, useEffect} from 'react'
import {records} from '../utils/requests'
import { TestListItem } from './TestListItem'

export const TestOfStudent = ({studentResults}) => {
  const {result} = studentResults
  console.log(result)

  return (
    <>
    {result ? result.map(({test})=>{
    return <TestListItem key={test._id} test={test}/>  
    })
    : <p>Loading...</p>}
    </>
  )
}
