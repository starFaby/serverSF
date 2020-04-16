import { Request, Response} from 'express';
class ControllerIndex {
    public indexAll(req:Request , res: Response){
        res.send('Index')
    }
}
const controllerIndex =  new ControllerIndex();
export default controllerIndex;