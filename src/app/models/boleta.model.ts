import { Departamento } from "./departamento.model";
import { NuevoUsuario } from "./nuevo-usuario.model";
import { Servicio } from "./servicio.model";

export class Boleta {
    codBoleta?:number;
    Departamento?:Departamento;
    Servicio?:Servicio;
    anio?:Number;
    mes?:Number;
    estado?:Number;
    fechaPago?:Date;
    Usuario?:NuevoUsuario;
    fechaRegis?:Date;

}
