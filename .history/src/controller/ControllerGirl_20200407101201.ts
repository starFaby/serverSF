import {Request, Response} from 'express';
class ControllerGirl {
    public girlAll (req: Request, res: Response){
        res.json({mesage: 'controller girl'});
    }
}
const controllerGirl = new ControllerGirl();
export default controllerGirl;