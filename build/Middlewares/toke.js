"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token = {
    verifyToken: (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized request');
        }
        const token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unauthorized request');
        }
        const payload = jsonwebtoken_1.default.verify(token, 'secret');
        if (!payload) {
            return res.status(401).send('Unauthorized request');
        }
        req.iduser = payload.subject;
        next();
    }
};
exports.default = module.exports = token;
