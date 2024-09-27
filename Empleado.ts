import { Persona } from "./Persona"
class Empleado extends Persona {
 
    salary: number

 constructor (salary: number, edad: number, nombre: string){
    super(nombre , edad)
    this.salary = salary 

 }
 
 horas:number = 8 
 Trabajar(horas:number): void{
    console.log(`Las horas trabajadas en el día son ${horas}`)
 }

 override saludar(): void{
    console.log(`Hola ${this.name} tu edad es ${this.getAge} y el salario es de ${this.salary}`)
 }
}