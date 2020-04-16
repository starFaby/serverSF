import { Request, Response } from 'express';
import pool from '../database';
import { SignIn } from '../models/SignIn';
import jwt from 'jsonwebtoken';
import helpers from '../libs/helpers';
class ControllerSignIn {

    public async SignIn(req: Request, res: Response) {
        const { email, password } = req.body;
        const newUser: SignIn = {
            email: email,
            password: password
        }
        const row = (await pool).query('SElECT * FROM users Where email = ?', [newUser.email]);
        const newrow = (await row);
        if (newrow[0] !== undefined) {
            const user = newrow[0];
            const validPassword = await helpers.matchPassword(newUser.password, user.password);
            if (validPassword) {
                console.log('PRUEBA ',user.iduser);
                const id = user.iduser;
                const payload = { subject: user.iduser}
                const token = jwt.sign(payload, 'secret');
                res.status(200).send({token , id});
            } else {
                res.status(401).send('PASSWORD INCORRECTO');
            }
        } else {
            res.status(401).send('USUARIO NO ENCONTRADO');
        }
    }
    public inError(req: Request, res: Response) {
        res.json(false);
    }

}
const controllerSignIn = new ControllerSignIn();
export default controllerSignIn;