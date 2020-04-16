"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterLogout {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res, next) => {
            req.logOut();
            res.json({ message: 'Sali de mi usuario' });
            //  res.redirect('/loginup');
            console.log('Saliste de usuario');
            next();
        });
    }
}
const routerLogout = new RouterLogout();
exports.default = routerLogout.router;
