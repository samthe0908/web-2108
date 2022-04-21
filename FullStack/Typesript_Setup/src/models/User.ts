import {IUser}  from '../interfaces/IUser';

export class User implements IUser{
    id: number;
    name: string;
    age ?: number| undefined;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    setName(name:string) {
        this.name = name;
    }
}
