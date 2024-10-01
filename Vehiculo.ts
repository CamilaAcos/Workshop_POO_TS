export abstract class Vehiculo {

    constructor(public placa:string) { }

    abstract arrancar(): void;

}

export class Coche extends Vehiculo {
    constructor(placa: string) {
        super(placa);
    }
    arrancar(): void {
        console.log(`Arrancando el coche con placa ${this.placa}`)
    }
}

export class Moto extends Vehiculo {
    constructor(placa: string) {
        super(placa);
    }
    arrancar(): void {
        console.log(`Arrancando la moto ${this.placa}`)
    }

} 