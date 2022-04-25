import { Usuario } from "./usuario.model";

export class Departamento {
    codDepartamento?:number;
    descripcion?:string;
    numHabitaciones?:number;
    fechaRegistro?:Date;
    idUsuario?:Usuario;
}
