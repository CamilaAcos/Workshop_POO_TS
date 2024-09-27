export class Persona {
nombre: string
private edad: number

constructor(nombre:string, edad:number){
    this.nombre = nombre
    this.edad = edad 

}
saludar():void {
console.log(`Persona: Tu nombre es ${this.nombre} y tienes ${this.edad} años`)
}

getedad(): number {
    return this.edad
}
}