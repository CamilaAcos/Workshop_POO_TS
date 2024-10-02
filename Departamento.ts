import { Empleado } from "./Empleado"

export class Departamento {
    nombre: string
    empleados: Array<Empleado>

    constructor(nombre: string, empleados: Array<Empleado>) {
        this.nombre = nombre
        this.empleados = empleados
    }

    agregarEmpleadoADep(empleado: Empleado): void {
        let empleadoExiste = false;
        for (let i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i] === empleado) {
                empleadoExiste = true;
                break
            }
        }
        if (empleadoExiste === false) {
            this.empleados.push(empleado)
            console.log(`el empleado ${empleado.nombre} fue assignado al departamento: ${this.nombre}`)
        }

    }

    eliminarEmpleado(nombre: string): void {
        let posicion = -1
        for (let i = 0; i < this.empleados.length; i++) {
            const empleado = this.empleados[i];
            if (empleado.nombre === nombre) {
                posicion = i
                break
            }
        }
        if (posicion !== -1) {
            const empleadoEliminado = this.empleados.splice(posicion, 1)
            console.log(`se eliminó el empleado ${nombre} de la empresa ${this.nombre}`)
        } else {
            console.log(`no se encontró el empleado ${nombre}`)
        }
    }

    listarEmpleadosDep(): void {
        if (this.empleados.length > 0) {
            console.log(`Empleados Departamento ${this.nombre}:`)
            this.empleados.forEach(empleado => { console.log(empleado.nombre) })
        } else {
            console.log(`El departamento ${this.nombre} aun no tiene empleados`)
        }
    }

}