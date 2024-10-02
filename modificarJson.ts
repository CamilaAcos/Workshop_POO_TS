import { readFileSync } from 'fs'
import { } from 'path'
import { Empleado } from './Empleado'


const leerEmpleados = () => {

    const datosEmpleadosString = readFileSync('./listaEmpleados.json').toString()
    const nuevaListaEmpleados = JSON.parse(datosEmpleadosString)

    const crearEmpleados = (): Empleado[] => {
        return nuevaListaEmpleados.map((nuevoEmpleado2: any) => {
            return new Empleado(nuevoEmpleado2.nombre, nuevoEmpleado2.edad, nuevoEmpleado2.salario, nuevoEmpleado2.direccion, nuevoEmpleado2.vehiculos, nuevoEmpleado2.estadoCivil, nuevoEmpleado2.proyectos);
        })
    }

    const empleados2 = crearEmpleados()
    const empleadosAjson = JSON.stringify(empleados2)
    console.log(empleadosAjson)

}

leerEmpleados()