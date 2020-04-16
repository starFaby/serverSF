"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helpers_1 = __importDefault(require("../libs/helpers"));
class ControllerSignIn {
    SignIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const newUser = {
                email: email,
                password: password
            };
            const row = (yield database_1.default).query('SElECT * FROM users Where email = ?', [newUser.email]);
            const newrow = (yield row);
            if (newrow[0] !== undefined) {
                const user = newrow[0];
                const validPassword = yield helpers_1.default.matchPassword(newUser.password, user.password);
                if (validPassword) {
                    console.log('PRUEBA ', user.iduser);
                    const id = user.iduser;
                    const payload = { subject: user.iduser };
                    const token = jsonwebtoken_1.default.sign(payload, 'secret');
                    res.status(200).send({ token, id });
                }
                else {
                    res.status(401).send('PASSWORD INCORRECTO');
                }
            }
            else {
                res.status(401).send('USUARIO NO ENCONTRADO');
            }
        });
    }
    inError(req, res) {
        res.json(false);
    }
}
const controllerSignIn = new ControllerSignIn();
exports.default = controllerSignIn;
