import { Departamento } from "./departamento.model";
import { LoginUsuario } from "../security/login-usuario";

export class Visitante {

    idVisitante?:number;
    departamento?:Departamento;
    nombre?:string;
    apellido?:string;
    telefono?:string;
    parentesco?:string;
    fechaNacimiento?:Date;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;




}
