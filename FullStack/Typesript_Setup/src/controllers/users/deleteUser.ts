import {users} from "../../db";
import {Request, Response} from "express";

export const deleteUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const index = users.findIndex((item) => item.id === +id);
    if (index !== -1) {
        users.splice(index, 1);
    }
    res.send('Item deleted');
};