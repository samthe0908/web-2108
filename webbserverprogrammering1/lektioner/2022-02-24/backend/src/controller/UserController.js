import userDatabase from "../data/userDatabase.js"

const creatUser = (req,res) => {
    const { name, age, gender } = req.body
    const newObject = {
        name: name,
        age: age,
        gender: gender
    }
    userDatabase.push(newObject)
    res.status(201).send(userDatabase)
    // return res.status(200).send('API Is Alive!!')
    // res.status(200).send('Successfully created user :)')
}


const getUsers = (req,res) => {
    res.send(userDatabase)
}

const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}
const getUserNames = (req,res) => {
  const responseFromDb = userNames()
    res.send(responseFromDb)
}


const searchUserByName = (name) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return
        }
    })
    return object
}
const getUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchUserByName(name)
    res.send(responseFromDb)
}


const modifyUserByName = (name, newName, age, gender) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.age = age
            user.gender = gender
            object = user
            return user
        }
    })
    return object
}
const updateUserByName = (req, res) => {
    const { name, newName, age, gender } = req.body
    const response = modifyUserByName(name, newName, age, gender)
    res.status(202).send(response)
}

const removeUserByName = (name) => {
    let text = `User with name: "${name}" `

    for (let i = 0; i < userDatabase.length; i++) {
        if (name === userDatabase[i].name) {
            text += `was deleted from database!`
            userDatabase.splice(i, 1)
            return text
        }
    }
    text += `don't exist in database!`
    return text
}
const deleteUserByName = (req,res) => {
    const name = req.params.name
    const responseFromDB = removeUserByName(name)
    res.status(200).send(responseFromDB)
}


export default {
    creatUser,
    getUsers,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName
}