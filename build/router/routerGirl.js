"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerGirl_1 = __importDefault(require("../controller/ControllerGirl"));
const toke_1 = __importDefault(require("../Middlewares/toke"));
class RouterGirl {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', toke_1.default.verifyToken, ControllerGirl_1.default.listAll); //, auth.isLoggedIn
        this.router.get('/', ControllerGirl_1.default.listOne);
        this.router.post('/', ControllerGirl_1.default.create);
        this.router.delete('/:id', ControllerGirl_1.default.delete);
        this.router.put('/:id', ControllerGirl_1.default.update);
    }
}
const routerGirl = new RouterGirl();
exports.default = routerGirl.router;
