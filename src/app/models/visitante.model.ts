import { Departamento } from "./departamento.model";
import { LoginUsuario } from "../security/login-usuario";


export class Visitante {

    idVisitante?:number;
    departamento?:Departamento;
    dni?:String;
    nombre?:string;
    apellido?:string;
    telefono?:string;
    parentesco?:string;
    estado?:number;
    fechaNacimiento?:Date;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;




}
