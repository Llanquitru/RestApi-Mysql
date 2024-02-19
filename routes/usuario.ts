import { Router } from "express";
import { deleteUsuario, getUsuario, getUsuarioId, postUsuario, putUsuario } from "../controllers/usuarios";
import {check} from 'express-validator'
import validarCampos from "../middelware/validar-campos";
const router = Router();


router.get('/', getUsuario)
router.get('/:id', getUsuarioId)
router.post('/',[
check('nombre','el nombre es obligatorio').not().isEmpty(),
check('contrasena','La contraseña no puede estar vacio').not().isEmpty(),
validarCampos
], postUsuario)
router.put('/:id', putUsuario)
router.delete('/:id', deleteUsuario)

export default router;