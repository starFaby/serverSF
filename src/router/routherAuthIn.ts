import { Router } from 'express';
import ControllerSignIn from '../controller/ControllerSignIn';
import passport from 'passport';
// import auth from '../libs/auth'
class RouterAuthIn {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
     /*    this.router.post('/',(req, res, next)=>{
            passport.authenticate('local.signin', {
                successRedirect: '/api/signin/in',
                failureRedirect: '/api/signin/inError',
                failureFlash: true
            })(req, res, next);
        });*/
        this.router.post('/',ControllerSignIn.SignIn);
      //  this.router.get('/in',ControllerSignIn.in);
        this.router.get('/inError',ControllerSignIn.inError);
    }
    
}
const routerAuthIn = new RouterAuthIn();
export default routerAuthIn.router;