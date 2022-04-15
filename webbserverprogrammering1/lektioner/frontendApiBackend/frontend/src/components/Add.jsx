import CalcService from "../utils/api/services/CalcService";
import {useState} from "react";
import * as events from "events";

const Add = () => {
    const [data, setData] = useState('hårdkodat innehåll')
    const [num1, setNum1] = useState('5')
    const [num2, setNum2] = useState('3')

    function fetchDataFromExternalApi(){
    CalcService.add(num1,num2)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => console.log(error))

    }

function displayData(){
if (data.length !== 0){
    return <h3> Response from API: '{data}'</h3>
}
}

  return(
   <>
   <h1>Add</h1>
       Mummer: <input type="number"
                            value={num1}
       onChange={events => setNum1(Number(events.target.value))}/>

       <span> + </span>
       <input type="number"
                            value={num2}
                            onChange={events => setNum2(Number(events.target.value))}/>

       <br/>
<button onClick={fetchDataFromExternalApi}> Get Result</button>
       {/*dessa tre returneras samma värde*/}
       {displayData()}{/* functionsanrop */}
       {data ? <h3> Response from API  '{data}'</h3>: ''}{/* ternary */}
       { data && <h3> Response from API  '{data}'</h3>}{/* short circuit */}

   </>
  )
}
export default Add