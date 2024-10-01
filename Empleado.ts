import { Persona } from "./Persona"
import { Direccion } from "./Direccion"
import { Vehiculo } from "./Vehiculo"

export class Empleado extends Persona {

    salario: number

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion, vehiculos:Vehiculo[]) {
        super(nombre, edad, direccion, vehiculos)
        this.salario = salario

    }

    horas: number = 8
    Trabajar(horas: number): void {
        console.log(`Las horas trabajadas en el día son ${horas}`)
    }

    override saludar(): void {
        console.log(`Hola ${this.nombre} tu edad es ${this.getedad()} años y el salario es de ${this.salario}`)
    }
}