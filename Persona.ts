import { Direccion } from "./Direccion"
export class Persona {

    nombre: string
    private edad: number
    direccion: Direccion

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion 
        
    }
    
    saludar(): void {
        console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`)
    }

    getedad(): number {
        return this.edad
    }
}