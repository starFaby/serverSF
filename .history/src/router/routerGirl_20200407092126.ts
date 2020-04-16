import { Router } from 'express';
class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/girl', (req, res) => {
            res.send('girls Star')
        })
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;