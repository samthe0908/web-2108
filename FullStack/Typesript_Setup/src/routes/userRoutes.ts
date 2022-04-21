import {Router} from "express";
import {getAllUsers} from "../controllers/users/getAllUsers";
import {createUsers} from "../controllers/users/createUsers";
import {deleteUser} from "../controllers/users/deleteUser";
import {updateUser} from "../controllers/users/updateUser";
import {getUser} from "../controllers/users/getUser";


const router = Router();

router.get ('/', getAllUsers);
router.post('/', createUsers);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/:id', getUser)
export =  router;