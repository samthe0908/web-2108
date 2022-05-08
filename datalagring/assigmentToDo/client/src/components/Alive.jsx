import AliveService from "../utils/api/service/AliveService.js";
import {useEffect, useState} from "react";
import css from '../App.module.css'

const Alive = () => {
    const [data, setData] = useState('no connection to backend')
    const [connected, setConnected] = useState(false)

    const fetchDataFromExternalApi= () => {
        AliveService.alive()
            .then(response => {
                console.log(response.data)
                // setData(response.data)
                setConnected(true)
            })
            .catch((error) =>
                console.error(error.message))
    }

    // function displayData(){
    //     if (data.length !== 0){
    //         return <h3>Response from API "{data}"</h3>
    //     }
    // }
    useEffect(() => {
        fetchDataFromExternalApi()
    }, [])
    return(
        <>
            <article>
                {/*<p className={ connected ? css.green : css.red }>{ data }</p>*/}
                <h2>Alive</h2>
                <button onClick={() => fetchDataFromExternalApi()}>Make API call</button>
                {/*{displayData()}*/}
            </article>
        </>
    )

}

export default Alive
