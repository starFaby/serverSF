import { Router } from 'express';
import ControllerGirl from '../controller/ControllerGirl';
class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/',ControllerGirl.girlAll);
        this.router.post('/', ControllerGirl.create);
        this.router.delete('/:id',ControllerGirl.delete);
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;