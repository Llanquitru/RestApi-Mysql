import { DataTypes,Model } from "sequelize";
import db from "../db/db";



// Genero el esquema de la tabla usuario
const Usuario = db.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
  contrasena: {
    type: DataTypes.STRING,
  },
});

export default Usuario;
