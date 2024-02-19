import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import authRoutes from "../routes/auth";
import cors from "cors";

import db from "../db/db";
//crepo una clase llamada server donde pongo las configuracion del puerto
class Server {
  private app: Application;
  private port: string;

  //aqui creo las rutas para los endpoint
  private apiPath = {
    usuarios: "/api/usuarios",
    authPath:"/api/auth"
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8989";

    // Metodos iniciales
    this.dbConnection();
    this.middelwares();
    this.routes();
  }

  //con esta funcion realizo lo logico para conectar a la base de datos
  async dbConnection() {
    try {
      await db.authenticate();

      console.log("Conectado a la base datos");
    } catch (error) {
      throw new Error(error);
    }
  }

  middelwares() {
    //cors
    this.app.use(cors());

    //parseo del body
    this.app.use(express.json());

    //carpeta publica

    this.app.use(express.static("public"));
  }
//aqui estan las rutas
  routes() {
    this.app.use(this.apiPath.usuarios, userRoutes);
    this.app.use(this.apiPath.authPath, authRoutes);
  }
//con esta funcion corro el programa
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo");
    });
  }
}

export default Server;
