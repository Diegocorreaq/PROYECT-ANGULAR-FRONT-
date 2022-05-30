import { Departamento } from "./departamento.model";
import { LoginUsuario } from "../security/login-usuario";
import { Visitante } from "./visitante.model";

export class Visita {

    idVisita?:number;
    departamento?:Departamento;
    idVisitante?:Visitante;
    fechaEntrada?:Date;
    fechaSalida?:Date;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;

}
