import { Request, Response } from 'express';
import pool from '../database';
import { Girl } from '../models/Girl';
class ControllerGirl {
    public async listAll(req: Request, res: Response) {
        const girl = (await pool).query('DESCRIBE girl');
        res.json({ message: 'girl' });
    }
    public listOne(req: Request, res: Response) {
        res.json({ mesage: 'Listar un solo objeto' });
    }
    public async create(req: Request, res: Response) {
        console.log(req.body);
        const { title, url, description, user_id } = req.body;
        const newGirl: Girl = {
            title: title,
            url: url,
            description: description,
            user_id: user_id,
        };
        (await pool).query('INSERT INTO girl SET ?', [newGirl]);
        res.json({ message: 'create girl' });
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