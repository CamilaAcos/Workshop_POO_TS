export abstract class Vehiculo {

    constructor() { }

    abstract arrancar(): void;

}

class Coche extends Vehiculo {
    constructor() {
        super();
    }
    arrancar(): void {
        console.log("Arrancando el coche")
    }
}

class Moto extends Vehiculo {
    constructor() {
        super();
    }
    arrancar(): void {
        console.log("Arrancando la moto")
    }

}