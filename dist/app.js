"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
//aqui corro el programa en typescript tengo que correrlo en el dist/app.js
//el dote env sirve para poner wea delicadas como clavez y esas cosas
dotenv_1.default.config();
const server = new server_1.default;
server.listen();
//# sourceMappingURL=app.js.map