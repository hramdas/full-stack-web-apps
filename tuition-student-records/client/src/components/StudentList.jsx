import React from 'react'
import {StudentListItem} from './StudentListItem'
const studentData = ["Ramdas", "Ram", "Rohit", "Pooja"]

export const StudentList = () => {
  return (
    <div>
      <h2>Students List</h2>
      {studentData.map((student)=>(
        <StudentListItem student={student} />
      ))}
    </div>
  )
}
