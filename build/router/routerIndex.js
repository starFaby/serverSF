"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerIndex_1 = __importDefault(require("../controller/ControllerIndex"));
class RouterIndex {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ControllerIndex_1.default.indexAll);
    }
}
const indexRouter = new RouterIndex();
exports.default = indexRouter.router;
