import {Request, Response} from 'express';
import pool from '../database';
class ControllerGirl {
    public async girlAll (req: Request, res: Response){
       const girl = (await pool).query('DESCRIBE girl');
        res.json({message: 'girl'});
    }
    public create (req: Request, res: Response){
        res.json({message:'create girl'});
    }
    public update(req: Request, res: Response){
        res.json({message: 'Update girl'});
    }
    public delete(req: Request, res: Response){
        res.json({message: 'delete girl'});
    }
}
const controllerGirl = new ControllerGirl();
export default controllerGirl;