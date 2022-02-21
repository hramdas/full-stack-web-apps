import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { records } from '../../utils/requests';
import { StudentsofTest } from './StudentsofTest';

export const Test = () => {
  const [test, settest] = useState();
  const [result, setresult] = useState();
  const {id} = useParams()
 
  useEffect(() => {
    getStudentData()
  }, []);

  async function getStudentData(){
    let {data} = await records.get("/result/test/"+id)
    settest(data.test)
    const resdata = data.results.result.sort((a,b)=>b.marks-a.marks)
    setresult(resdata)
  }

  return (
    <div className='studentProfile'>
        {
          test ? 
          <div className='studentProfile'>
            <h2>{test.name}</h2>
            <span id='studentDetails'>
              <span>Date : <b>{test.date.split("T")[0]}</b></span>
              <span>Subject : <b>{test.subject}</b></span>
            </span>
          </div> : <p>Loading...</p>
        }
        <hr style={{width :"100%"}} />
        <div>
     
          <div className='testListItem'>
            <b>Student Name</b>
            <p>Grade</p>
            <b>Marks</b>      
          </div>
          {result ?  result.map(res=>(
            <StudentsofTest key={res._id} res={res} />
          )) :
          <p>Loading...</p>}
        </div>
      </div>
    
  )
}
