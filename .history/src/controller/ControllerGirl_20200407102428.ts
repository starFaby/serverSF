import {Request, Response} from 'express';
import pool from '../database';
class ControllerGirl {
    public async girlAll (req: Request, res: Response){
        (await pool).query('DESCRIBE girl');
        res.json({message: 'Gils'});
    }
}
const controllerGirl = new ControllerGirl();
export default controllerGirl;