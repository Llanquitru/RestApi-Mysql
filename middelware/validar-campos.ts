import  {validationResult} from "express-validator"
import { Request, Response } from "express";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";
 

// aqui realizo la validacion usando el paquete de express validation
 const validarCampos=(req:Request,res:Response, next:Next)=>{
const errors = validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json(errors);

}

next();
}


export default validarCampos