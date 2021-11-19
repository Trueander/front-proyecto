import { Datosconsulta } from "./datosconsulta";

export class Equifax {
    id!: number;
    nombres!: string;
    apellidos!: string;
    dni!: string;
    ocupacion!: string;
    nacionalidad!: string;
    datosConsulta!: Datosconsulta[];
}
