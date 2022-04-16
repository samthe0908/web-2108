import UserController from "../controller/UserController.js";
//Endpoint + Business Logic + CRUD operation
const routes = (app) => {
//CRUD
//CREATE
    app.post('/user/', UserController.creatUser )

//READ
    app.get('/users',UserController.getUsers)
    app.get('/users/name',UserController.getUserNames)
    app.get('/user/:name',UserController.getUserByName)

//UPDATE
    app.put('/user/', UserController.updateUserByName)

//DELETE
    app.delete('/user/:name', UserController.deleteUserByName)
}
export default {
    routes
}