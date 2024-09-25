export class Persona {
name: string
private age: number

constructor(name:string, age:number){
    this.name = name
    this.age = age   

}
saludar():void {
console.log(`Persona: Tu nombre es ${this.name} y tienes ${this.age} años`)
}

getAge(): number {
    return this.age
}
}