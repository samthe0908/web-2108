import { useState } from 'react'
import MyApiService from '../utils/api/services/MyApiService'

const Name = () => {
    const [data, setData] = useState('')
    const [yourName, setYourName] = useState('Samantha')

    function fetchDataFromExternalApi() {
        MyApiService.welcome_message(yourName)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData() {
        if (data.length !== 0) {
            return <h3>Response from API: "{ data }"</h3>
        }
    }

    return (
        <>
            <h1>Name</h1>
            Enter you name:<input type='text'
                                  value={ yourName }
                                  onChange={ event => setYourName(event.target.value) }/>
            <button onClick={ () => fetchDataFromExternalApi() }>Make API call</button>
            { displayData() }
        </>
    )
}

export default Name