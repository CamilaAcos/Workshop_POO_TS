import { Direccion } from "./Direccion"
import { EstadoCivil } from "./EstadoCivil"
import { Vehiculo } from "./Vehiculo"

export class Persona {

    nombre: string
    private edad: number
    direccion: Direccion
    vehiculos: Vehiculo []
    estadoCivil : EstadoCivil

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[], estadoCivil: EstadoCivil) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion 
        this.vehiculos = vehiculos
        this.estadoCivil= estadoCivil
        
    }
    
    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.nombre}, tienes ${this.edad} años y tu estado civil es ${this.estadoCivil}`)
    }

    getedad(): number {
        return this.edad
    }
} 