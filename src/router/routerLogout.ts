import { Router } from 'express';
class RouterLogout{
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
         this.router.get('/',(req, res, next)=>{
            req.logOut();
            res.json({message: 'Sali de mi usuario'})
          //  res.redirect('/loginup');
            console.log('Saliste de usuario');
            next();
        });
    }
    
}
const routerLogout = new RouterLogout();
export default routerLogout.router;