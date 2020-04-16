import { Router, response } from 'express';
import ControllerAuthentication from '../controller/ControllerAuthentication';
import passport from 'passport';
//import  auth from '../libs/auth';
class RouterAuthentication {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/',ControllerAuthentication.listAll);
        this.router.get('/',ControllerAuthentication.listOne);
        this.router.post('/',ControllerAuthentication.create);

      /*  this.router.post('/',passport.authenticate('local.signup', {
            successRedirect: '/api/signup/up',
            failureRedirect: '/api/signup/upError',
            failureFlash: true
        }));*/
        this.router.get('/up',ControllerAuthentication.up)
        this.router.get('/upError',ControllerAuthentication.upError)
        this.router.delete('/:id',ControllerAuthentication.delete);
        this.router.put('/:id',ControllerAuthentication.update);
    }
    
}
const routerAuthentication = new RouterAuthentication();
export default routerAuthentication.router;