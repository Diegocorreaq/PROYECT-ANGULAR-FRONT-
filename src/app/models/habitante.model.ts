import { Departamento } from "./departamento.model";
import { Tipohabitante } from "./tipohabitante.model";
import { LoginUsuario } from "../security/login-usuario";

export class Habitante {
    idHabitante?:number;
    departamento?:Departamento;
    dni?:number;
    nombre?:string;
    apellido?:string;
    correo?:string;
    telefono?:string;
    fechaNacimiento?:Date;
    habitante?:Tipohabitante;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;
}
