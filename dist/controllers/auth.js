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
exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generar_jwt_1 = require("../middelware/generar-jwt");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contrasena } = req.body;
    //verificar el email si esta en la base de datos
    const usuario = yield usuario_1.default.findOne({
        where: { email },
    });
    if (!usuario) {
        return res.status(400).json({
            msg: "Usuario no encontrado",
        });
    }
    if (!usuario.estado) { // Suponiendo que el estado esté representado por una propiedad 'estado' en el modelo Usuario
        return res.status(400).json({
            msg: "Cuenta desactivada",
        });
    }
    //verificar la contraseña
    const validarPassword = bcrypt_1.default.compareSync(contrasena, usuario.contrasena);
    if (!validarPassword) {
        return res.status(400).json({
            msg: "contraseña mala",
        });
    }
    //generar el JWT
    const token = yield (0, generar_jwt_1.generarJWT)(usuario.id);
    res.json({
        usuario,
        nombre: usuario.nombre,
        token
    });
    try {
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Hable con el admin",
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map