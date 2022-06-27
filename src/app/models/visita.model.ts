import { Departamento } from "./departamento.model";
import { LoginUsuario } from "../security/login-usuario";
import { Visitante } from "./visitante.model";

export class Visita {

    idVisita?:number;
    departamento?:Departamento;
    visitante?:Visitante;
    fechaEntrada?:Date;
    fechaSalida?:Date;
    comentario?:String;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;

}
