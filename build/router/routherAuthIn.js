"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerSignIn_1 = __importDefault(require("../controller/ControllerSignIn"));
// import auth from '../libs/auth'
class RouterAuthIn {
    constructor() {
        this.router = express_1.Router();
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
        this.router.post('/', ControllerSignIn_1.default.SignIn);
        //  this.router.get('/in',ControllerSignIn.in);
        this.router.get('/inError', ControllerSignIn_1.default.inError);
    }
}
const routerAuthIn = new RouterAuthIn();
exports.default = routerAuthIn.router;
