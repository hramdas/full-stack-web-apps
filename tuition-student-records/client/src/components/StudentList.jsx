import {useState, useEffect} from 'react'
import {StudentListItem} from './StudentListItem'
import {records} from '../utils/requests'

export const StudentList = () => {
   const [students, setStudents] = useState();
    const getStudents = async ()=>{
     const {data} = await records.get('/student')
      console.log(data)
     setStudents(data.students)
   }

   useEffect(() => {
     getStudents()
   }, []);
  
  
  return (
    <div>
      <h2>Students List</h2>
      { students ? students.map((student)=>(
        <StudentListItem key={student._id} studentdata={student} />
      )) : <p>Loading...</p>}
    </div>
  )
}
