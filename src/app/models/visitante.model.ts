import { Departamento } from "./departamento.model";
import { Usuario } from "./usuario.model";

export class Visitante {

    idVisitante?:number;
    departamento?:Departamento;
    nombre?:string;
    apellido?:string;
    telefono?:string;
    parentesco?:string;
    fechaNacimiento?:Date;
    usuario?:Usuario;
    fechaRegistro?:Date;




}
