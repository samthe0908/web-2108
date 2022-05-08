import AliveService from "../utils/api/service/AliveService.js";
import {useState} from "react";

const Alive = () => {
    const [data, setData] = useState('')

    function fetchDataFromExternalApi() {
        AliveService.alive()
            .then(response => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    function displayData(){
        if (data.length !== 0){
            return <h3>Response from API "{data}"</h3>
        }
    }

    return(
        <>
            <article>
                <h2>Alive</h2>
                <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
                {displayData()}
            </article>
        </>
    )

}

export default Alive
