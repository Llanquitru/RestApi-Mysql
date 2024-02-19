import { Request, Response } from "express";
import Usuario from "../models/usuario";
import bcryptjs from "bcrypt";
import { generarJWT } from "../middelware/generar-jwt";




export const login = async (req: Request, res: Response) => {
  const { email, contrasena} = req.body;
  //verificar el email si esta en la base de datos
  const usuario = await Usuario.findOne({
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

  const validarPassword = bcryptjs.compareSync(contrasena, usuario.contrasena);

  if(!validarPassword){
    return res.status(400).json({
      msg: "contraseña mala",
    });
  }
  //generar el JWT
const token = await generarJWT(usuario.id)
  res.json({
   usuario,
   nombre : usuario.nombre,
   token
  });
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Hable con el admin",
    });
  }
};
