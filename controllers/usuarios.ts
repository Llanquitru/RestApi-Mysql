import { Request, Response } from "express";
import Usuario from "../models/usuario";
import bcryptjs from "bcrypt";


export const getUsuario = async(req: Request, res: Response) => {
    const usuarios =  await Usuario.findAll()

    console.log(usuarios)

  res.json({usuarios});
};

export const getUsuarioId = async(req: Request, res: Response) => {
  const { id } = req.params;

  const usuarios = await Usuario.findByPk(id);

  res.json(usuarios);
};

export const postUsuario = async (req: Request, res: Response) => {
  const { nombre,email,contrasena } = req.body
  const usuario = new Usuario({nombre,email,contrasena});


  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: "Ya existe un usuario con ese correo: " + email,
      });
    }

    const salt = bcryptjs.genSaltSync()
    usuario.contrasena= bcryptjs.hashSync(contrasena,salt)

    

   
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el admin",
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        msg: " no hay un usuario con ese id",
      });
    }

    
 
    await usuario.update(body);

    res.json(usuario);
  } catch (error) {}
};

export const deleteUsuario = async(req: Request, res: Response) => {
  const { id } = req.params;
try{
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        msg: " no hay un usuario con ese id",
      });
    }

//eliminacion fiscia
//await usuario.destroy();
//res.json('usuario borrado de la faz de la tierra');



//Eliminacion logica

await usuario.update({estado: false});
res.json(usuario);

}catch(error){

}
};
