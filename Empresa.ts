import { Empleado } from "./Empleado"

export class Empresa {
    nombre: string
    nomina: Array<Empleado>

    constructor(nombre: string, nomina: Array<Empleado>) {
        this.nombre = nombre
        this.nomina = nomina
    }

    agregarEmpleado(empleado: Empleado): void {

        this.nomina.push(empleado);
        console.log(`Se agregó el empleado ${empleado.nombre} a la nomina de la empresa ${this.nombre}`)
    }

    eliminarEmpleado(nombre: string): void {
        let posicion = -1
        for (let i = 0; i < this.nomina.length; i++) {
            const empleado = this.nomina[i];
            if (empleado.nombre === nombre) {
                posicion = i
            }
        }
        if (posicion !== -1) {
            const empleadoEliminado = this.nomina.splice(posicion, 1)
            console.log(`se eliminó el empleado ${nombre} de la empresa ${this.nombre}`)
        } else {
            console.log(`no se encontró el empleado ${nombre}`)
        }
    }

    calcularTotalSalarios(): number {
        let sumaSalarios = 0
        const totalEmpelados = this.nomina.length
        for (let i = 0; i < totalEmpelados; i++) {
            const salarioEmp = this.nomina[i].salario
            sumaSalarios = sumaSalarios + salarioEmp
        }
        return sumaSalarios
    }

}
