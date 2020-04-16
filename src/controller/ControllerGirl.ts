import { Request, Response } from 'express';
import pool from '../database';
import { Girl } from '../models/Girl';
class ControllerGirl {
    public async listAll(req: Request, res: Response) {
        const girl = (await pool).query('SELECT * FROM girl');
        const newGirls = (await girl);
        res.json(newGirls);

    }
    public listOne(req: Request, res: Response) {
        res.json({ mesage: 'Listar un solo objeto' });
    }
    public async create(req: Request, res: Response) {
        const { title, url, description, iduser } = req.body;
        const newGirl: Girl = {
            title: title,
            url: url,
            description: description,
            iduser: iduser,
        };
        console.log(newGirl);
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