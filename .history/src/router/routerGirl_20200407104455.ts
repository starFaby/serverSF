import { Router } from 'express';
import ControllerGirl from '../controller/ControllerGirl';
class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/',ControllerGirl.listAll);
        this.router.get('/',ControllerGirl.listOne)
        this.router.post('/', ControllerGirl.create);
        this.router.delete('/:id',ControllerGirl.delete);
        this.router.put('/:id',ControllerGirl.update);
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;