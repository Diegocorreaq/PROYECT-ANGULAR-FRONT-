import { Departamento } from "./departamento.model";
import { NuevoUsuario } from "./nuevo-usuario.model";
import { Servicio } from "./servicio.model";

export class Boleta {
    codBoleta?:number;
    departamento?:Departamento;
    servicio?:Servicio;
    anio?:Number;
    mes?:Number;
    estado?:Number;
    fechaPago?:Date;
    Usuario?:NuevoUsuario;
    fechaRegis?:Date;

}
