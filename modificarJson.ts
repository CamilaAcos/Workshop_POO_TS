import { readFileSync } from 'fs'
import { } from 'path'
import { Empleado } from './Empleado'


const leerEmpleados = () => {

    const datosEmpleadosString = readFileSync('./listaEmpleados.json').toString()
    const nuevaListaEmpleados = JSON.parse(datosEmpleadosString)

    const crearEmpleados = (): Empleado[] => {
        return nuevaListaEmpleados.map((nuevoEmpleado: any) => {
            return new Empleado(nuevoEmpleado.nombre, nuevoEmpleado.edad, nuevoEmpleado.salario, nuevoEmpleado.direccion, nuevoEmpleado.vehiculos);
        })
    }
    
    const empleadosAjson = JSON.stringify(nuevaListaEmpleados)
    console.log(empleadosAjson)

}

leerEmpleados()