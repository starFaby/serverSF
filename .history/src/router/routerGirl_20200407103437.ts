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
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;