export class Persona {
name: string
age: number

constructor(name:string, age:number){
    this.name = name
    this.age = age   

}
saludar():void {
console.log(`Persona: Tu nombre es ${this.name} y tienes ${this.age} años`)
}
}