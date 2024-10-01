import { Direccion } from "./Direccion"
import { Vehiculo } from "./Vehiculo"

export class Persona {

    nombre: string
    private edad: number
    direccion: Direccion
    vehiculos: Vehiculo []

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[]) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion 
        this.vehiculos = vehiculos
        
    }
    
    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`)
    }

    getedad(): number {
        return this.edad
    }
}