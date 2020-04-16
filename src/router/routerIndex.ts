import { Router } from 'express';
import ControllerIndex from '../controller/ControllerIndex';

class RouterIndex {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/',ControllerIndex.indexAll);
    }
}
const indexRouter = new RouterIndex();
export default indexRouter.router;