import UsersService from "../utilts/api/services/UsersService";
import {useState} from "react";
import CardList from "./CardList";

const GetAllUsers = () => {
    const [data, setData] = useState([])

    const fetchDataFromExternalApi = () => {
        UsersService.getAllUsers()
            .then(response => {
                setData(response.data)
            })
            .catch(errow => console.log(errow))

    }

    return(
        <>
            <h1>GetAllUsers</h1>
            <button onClick={ fetchDataFromExternalApi }>
                Get All Users
            </button>
            <CardList users={ data }/>
        </>
    )
}
export default GetAllUsers