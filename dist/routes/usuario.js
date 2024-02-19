"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const express_validator_1 = require("express-validator");
const validar_campos_1 = __importDefault(require("../middelware/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuario);
router.get('/:id', usuarios_1.getUsuarioId);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'el nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('contrasena', 'La contraseña no puede estar vacio').not().isEmpty(),
    validar_campos_1.default
], usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map