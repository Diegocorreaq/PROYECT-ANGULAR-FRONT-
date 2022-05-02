import { LoginUsuario } from "../security/login-usuario";


export class Departamento {
    codDepartamento?:number;
    descripcion?:string;
    numHabitaciones?:number;
    fechaRegistro?:Date;
    idUsuario?:LoginUsuario;
}
