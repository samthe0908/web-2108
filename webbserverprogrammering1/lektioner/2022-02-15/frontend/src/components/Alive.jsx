import { useState } from 'react'
import MyApiService from '../utils/api/services/MyApiService'

const Alive = () => {
    const [data, setData] = useState('')

    function fetchDataFromExternalApi() {
        MyApiService.alive()
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
            <h1>Alive</h1>
            <button onClick={ () => fetchDataFromExternalApi() }>Make API call</button>
            { displayData() }
        </>
    )
}

export default Alive
