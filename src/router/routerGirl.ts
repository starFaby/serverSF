import { Router } from 'express';
import ControllerGirl from '../controller/ControllerGirl';
import jwt from '../Middlewares/toke';

class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', jwt.verifyToken ,ControllerGirl.listAll);//, auth.isLoggedIn
        this.router.get('/',ControllerGirl.listOne)
        this.router.post('/', ControllerGirl.create);
        this.router.delete('/:id',ControllerGirl.delete);
        this.router.put('/:id',ControllerGirl.update);
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;