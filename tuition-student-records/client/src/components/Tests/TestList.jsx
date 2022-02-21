import { ListItem } from "./ListItem"
import { useState, useEffect } from "react";
import {records} from '../../utils/requests'


export const TestList = () => {
  const [testData, setTestData] = useState();
  useEffect(() => {
    gettests()
  }, []);

  async function gettests(){
    const {data} = await records.get('/test')
    setTestData(data)
  }
  return (
    <div className="testList" >
      <h2>Test List</h2>
      
      {testData ? testData.tests.map((test) => 
        <ListItem key={test._id} test={test} />

      ): <p>Loading....</p>}
    </div>
  )
}
