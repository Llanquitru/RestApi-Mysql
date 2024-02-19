import { Router } from "express";
import {login} from "../controllers/auth"
import {check} from 'express-validator'
import validarCampos from "../middelware/validar-campos";
const router = Router();



router.post('/login',[
    check('email','El correo es obligatorio').isEmail(),
    check('contrasena','La contrasena es obligatorio').notEmpty(),
    validarCampos
],login);


export default router;