import { Request, Response } from 'express';
import { users } from '../../db';

export const getUser = (req: Request, res: Response) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.send(user);
    }
};