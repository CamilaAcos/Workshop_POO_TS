import { Persona } from "./Persona"
export class Empleado extends Persona {
 
    salario: number

 constructor (nombre: string, edad: number, salario: number){
    super(nombre , edad)
    this.salario = salario

 }
 
 horas:number = 8 
 Trabajar(horas:number): void{
    console.log(`Las horas trabajadas en el día son ${horas}`)
 }

 override saludar(): void{
    console.log(`Hola ${this.nombre} tu edad es ${this.getedad()} y el salario es de ${this.salario}`)
 }
}