import { Departamento } from "./departamento.model";
import { Tipohabitante } from "./tipohabitante.model";
import { LoginUsuario } from "../security/login-usuario";

export class Habitante {
    idHabitante?:number;
    departamento?:Departamento;
    tipohabitante?:Tipohabitante;
    dni?:number;
    nombre?:string;
    apellido?:string;
    correo?:string;
    telefono?:string;
    fechaNacimiento?:Date;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;
}
