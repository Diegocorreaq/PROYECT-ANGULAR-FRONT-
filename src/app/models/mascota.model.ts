import { Departamento } from "./departamento.model";
import { Usuario } from "./usuario.model";

export class Mascota {
    codMascota?:number;
    departamento?:Departamento;
    nombre?:string;
    tipo?:string;
    raza?:string;
    sexo?:string;
    fechaNacimiento?:Date;
    usuario?:Usuario;
    fechaRegistro?:Date;
}
