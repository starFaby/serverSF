import {Request, Response} from 'express';
import pool from '../database';
class ControllerGirl {
    public async girlAll (req: Request, res: Response){
       const girl = (await pool).query('DESCRIBE girl');
        res.json({message: girl});
    }
}
const controllerGirl = new ControllerGirl();
export default controllerGirl;