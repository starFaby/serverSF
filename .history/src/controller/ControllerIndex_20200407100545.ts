import { Request, Response} from 'express';
class ControllerIndex {
    public indexAll(req:Request , res: Response){
        res.json({mesasge: 'joder llegaste asta aqui'});
    }
}
const controllerIndex =  new ControllerIndex();
export default controllerIndex;