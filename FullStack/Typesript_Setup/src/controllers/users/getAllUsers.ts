import {users} from "../../db";
import {Request, Response} from "express";

export const getAllUsers =(req: Request, res:Response,  )=>{
    res.send(users);
};