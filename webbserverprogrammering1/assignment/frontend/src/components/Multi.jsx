import CalcService from "../utils/api/services/CalcService";
import {useState} from "react";

const Multi = () => {
    const [data, setData] = useState('')
    const [num1, setNum1] = useState('5')
    const [num2, setNum2] = useState('3')

    function fetchDataFromExternalApi(){
        CalcService.multi(num1,num2)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))

    }


    return (
        <>
            <h1> Multi</h1>
            Mummer: <input type="number"
                           value={num1}
                           onChange={events => setNum1(Number(events.target.value))}/>

            <span> X </span>
            <input type="number"
                   value={num2}
                   onChange={events => setNum2(Number(events.target.value))}/>

            <br/>
            <button onClick={fetchDataFromExternalApi}> Get Result</button>
            {data ? <h3> Response from API  '{data}'</h3>: ''}{/* ternary */}
        </>
    )
}
export default Multi