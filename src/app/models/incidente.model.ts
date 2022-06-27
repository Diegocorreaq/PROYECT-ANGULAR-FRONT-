import { CausaIncidente } from "./causa-incidente.model";
import { Departamento } from "./departamento.model";
import { NuevoUsuario } from "./nuevo-usuario.model";

export class Incidente {
    codIncidente?:number;
    departamento?:Departamento;
    causaIncidente?:CausaIncidente;
    comentario?:string;
    estado?:Number;
    Usuario?:NuevoUsuario;
    fechaRegis?:Date;
}
