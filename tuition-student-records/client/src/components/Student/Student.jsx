import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {records} from '../../utils/requests'
import { TestOfStudent } from './TestsOfStudent';

export const Student = () => {
  const [student, setstudent] = useState();
  const [result, setresult] = useState();
  const {id} = useParams()
 
  useEffect(() => {
    getStudentData()
  }, []);

  async function getStudentData(){
    let {data} = await records.get("/result/student/"+id)
    
    setstudent(data.student)
    setresult(data)
  }

  return (
  
      <div className='studentProfile'>
        {
          student ? 
          <div className='studentProfile'>
            <img src={student.picture} alt={student.name} />
            <h2>{student.name}</h2>
            <span id='studentDetails'>
              <span>Gender : <b>{student.gender}</b></span>
              <span>Grade : <b>{student.grade}</b></span>
            </span>
          </div> : <p>Loading...</p>
        }
        <hr style={{width :"100%"}} />
        <div>
          <h2>Attempted tests</h2>
          {result ?  <TestOfStudent studentResults={result.results} /> :
          <p>Loading...</p>}
        </div>
      </div>
    
  )
}