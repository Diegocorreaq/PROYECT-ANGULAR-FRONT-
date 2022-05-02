import { LoginUsuario } from "../security/login-usuario";
import { Departamento } from "./departamento.model";


export class Mascota {
    codMascota?:number;
    departamento?:Departamento;
    nombre?:string;
    tipo?:string;
    raza?:string;
    sexo?:string;
    fechaNacimiento?:Date;
    usuario?:LoginUsuario;
    fechaRegistro?:Date;
}
