import { Router } from 'express';
class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/girl', (req, res) => {
            console.log('GIrls');
        })
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;