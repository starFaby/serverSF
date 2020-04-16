import { Router } from 'express';

class RouterIndex {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/',(req, res)=>{
            res.send('faby star');
        })
    }
}
const indexRouter = new RouterIndex();
export default indexRouter.router;