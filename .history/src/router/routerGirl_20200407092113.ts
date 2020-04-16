import { Router } from 'express';
class RouterGirl {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/girl', (req, res) => {
            res.send('faby Star')
        })
    }
}
const routerGirl = new RouterGirl();
export default routerGirl.router;