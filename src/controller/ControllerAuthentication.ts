import { Request, Response } from 'express';
import pool from '../database';
import { Authentication } from '../models/Authentication';
import jwt from 'jsonwebtoken';
import helpers from '../libs/helpers'
class ControllerGirl {
    public async listAll(req: Request, res: Response) {
        const girl = (await pool).query('DESCRIBE girl');
        res.json({ message: 'girl' });
    }
    public listOne(req: Request, res: Response) {
        res.json({ mesage: 'Listar un solo objeto' });
    }
    public up(req: Request, res: Response) {
        res.json(true);
    }
    public upError(req: Request, res: Response) {
        res.json({ mesage: 'Lo siento no pudiste entrar' });
    }
    public async create(req: Request, res: Response) {
        const { cedula, nombre, apellido, email, password } = req.body;
        const newAuthentication: Authentication = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
        };
        newAuthentication.password = await helpers.encriptPassword(password);
        console.log(newAuthentication);
        const user = (await pool).query('INSERT INTO users SET ?', [newAuthentication]);
        const newUser = (await user);
        console.log(newUser.insertId);
        const payload = { subject: newUser.insertId }
        const token = jwt.sign(payload, 'secret');
        res.status(200).send({token});
    }
    public update(req: Request, res: Response) {
        res.json({ message: 'Update girl' });
    }
    public delete(req: Request, res: Response) {
        res.json({ message: 'delete girl' });
    }
}
const controllerGirl = new ControllerGirl();
export default controllerGirl;