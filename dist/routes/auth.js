"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const validar_campos_1 = __importDefault(require("../middelware/validar-campos"));
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.check)('email', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('contrasena', 'La contrasena es obligatorio').notEmpty(),
    validar_campos_1.default
], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map