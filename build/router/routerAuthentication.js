"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerAuthentication_1 = __importDefault(require("../controller/ControllerAuthentication"));
//import  auth from '../libs/auth';
class RouterAuthentication {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ControllerAuthentication_1.default.listAll);
        this.router.get('/', ControllerAuthentication_1.default.listOne);
        this.router.post('/', ControllerAuthentication_1.default.create);
        /*  this.router.post('/',passport.authenticate('local.signup', {
              successRedirect: '/api/signup/up',
              failureRedirect: '/api/signup/upError',
              failureFlash: true
          }));*/
        this.router.get('/up', ControllerAuthentication_1.default.up);
        this.router.get('/upError', ControllerAuthentication_1.default.upError);
        this.router.delete('/:id', ControllerAuthentication_1.default.delete);
        this.router.put('/:id', ControllerAuthentication_1.default.update);
    }
}
const routerAuthentication = new RouterAuthentication();
exports.default = routerAuthentication.router;
