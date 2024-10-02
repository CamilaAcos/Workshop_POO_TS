import { Empleado } from "./Empleado"

export class Proyecto {
    nombre: string
    empleados: Array<Empleado>

    constructor(nombre: string, empleados: Array<Empleado>) {
        this.nombre = nombre
        this.empleados = empleados
    }

    agregarEmpleadoAProy(empleado: Empleado): void {
        let empleadoExiste = false;
        for (let i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i] === empleado) {
                empleadoExiste = true;
                break
            }
        }
        if (empleadoExiste === false) {
            this.empleados.push(empleado)
            empleado.asignarProyecto(this)
            console.log(`el empleado ${empleado.nombre} fue assignado al proyecto ${this.nombre}`)
        }

    }

    listarEmpleadosProy(): void {
        if (this.empleados.length > 0) {
            console.log(`Empleados del proyecto ${this.nombre}:`)
            this.empleados.forEach(empleado => { console.log(empleado.nombre) })
        } else {
            console.log(`El proyecto ${this.nombre} aun no tiene empleados`)
        }
    }

}