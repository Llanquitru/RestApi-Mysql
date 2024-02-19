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
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const auth_1 = __importDefault(require("../routes/auth"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("../db/db"));
//crepo una clase llamada server donde pongo las configuracion del puerto
class Server {
    constructor() {
        //aqui creo las rutas para los endpoint
        this.apiPath = {
            usuarios: "/api/usuarios",
            authPath: "/api/auth"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8989";
        // Metodos iniciales
        this.dbConnection();
        this.middelwares();
        this.routes();
    }
    //con esta funcion realizo lo logico para conectar a la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate();
                console.log("Conectado a la base datos");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middelwares() {
        //cors
        this.app.use((0, cors_1.default)());
        //parseo del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    //aqui estan las rutas
    routes() {
        this.app.use(this.apiPath.usuarios, usuario_1.default);
        this.app.use(this.apiPath.authPath, auth_1.default);
    }
    //con esta funcion corro el programa
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo");
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map