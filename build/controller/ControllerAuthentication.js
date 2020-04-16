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
class ControllerGirl {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const girl = (yield database_1.default).query('DESCRIBE girl');
            res.json({ message: 'girl' });
        });
    }
    listOne(req, res) {
        res.json({ mesage: 'Listar un solo objeto' });
    }
    up(req, res) {
        res.json(true);
    }
    upError(req, res) {
        res.json({ mesage: 'Lo siento no pudiste entrar' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cedula, nombre, apellido, email, password } = req.body;
            const newAuthentication = {
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password,
            };
            newAuthentication.password = yield helpers_1.default.encriptPassword(password);
            console.log(newAuthentication);
            const user = (yield database_1.default).query('INSERT INTO users SET ?', [newAuthentication]);
            const newUser = (yield user);
            console.log(newUser.insertId);
            const payload = { subject: newUser.insertId };
            const token = jsonwebtoken_1.default.sign(payload, 'secret');
            res.status(200).send({ token });
        });
    }
    update(req, res) {
        res.json({ message: 'Update girl' });
    }
    delete(req, res) {
        res.json({ message: 'delete girl' });
    }
}
const controllerGirl = new ControllerGirl();
exports.default = controllerGirl;
