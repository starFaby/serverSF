"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerIndex {
    indexAll(req, res) {
        res.json({ mesasge: 'joder llegaste asta aqui' });
    }
}
const controllerIndex = new ControllerIndex();
exports.default = controllerIndex;
