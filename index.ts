import { Persona } from "./Persona"
import { Empleado } from "./Empleado"
import { Direccion } from "./Direccion"
import { crearPersona } from "./util"
import { Vehiculo } from "./Vehiculo"
import { Coche } from "./Vehiculo"
import { Moto } from "./Vehiculo"
import { EstadoCivil } from "./EstadoCivil"
import { Empresa } from "./Empresa"
import { Proyecto } from "./Proyecto"
import { Departamento } from "./Departamento"


const direccionesPersonas: Direccion[] = [

  {calle: 101, ciudad: "Medellin", pais: "Colombia", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 102, ciudad: "Bogotá", pais: "Colombia", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 103, ciudad: "Cali", pais: "Colombia", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 104, ciudad: "Madrid", pais: "España", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 105, ciudad: "Barcelona", pais: "España", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 106, ciudad: "Viña del Mar", pais: "Chile", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 107, ciudad: "Santiago", pais: "Chile", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 108, ciudad: "Lima", pais: "Perú", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 109, ciudad: "Cuzco", pais: "Perú", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},
  {calle: 110, ciudad: "Buenos Aires", pais: "Argentina", imprimirCiudad() {console.log(`Tu ciudad es ${this.ciudad}`)}},

]
  
const carro1 = new Coche("EHM735");
const carro2 = new Coche("JBQ165");
const moto1 = new Moto("JP54Q");
const moto2 = new Moto ("PCU3F5");

const personas: Persona[] = [
  new Persona("Jose", 52, direccionesPersonas[0], [carro1], EstadoCivil.CASADO),
  new Persona("Laura", 25, direccionesPersonas[1], [moto1], EstadoCivil.SOLTERO),
  new Persona("Andrea", 29, direccionesPersonas[2], [carro2, moto1], EstadoCivil.DIVORSIADO),
  new Persona("Alejandro", 30, direccionesPersonas[3], [carro1], EstadoCivil.UNION_LIBRE ),
  new Persona("Eliana", 35, direccionesPersonas[4], [moto1], EstadoCivil.CASADO),
  new Persona("Julio", 33, direccionesPersonas[5], [carro2], EstadoCivil.SOLTERO),
  new Persona("Valeria", 27, direccionesPersonas[6], [moto2], EstadoCivil.SOLTERO),
  new Persona("Santiago", 39, direccionesPersonas[7], [moto1], EstadoCivil.CASADO),
  new Persona("Samuel", 32, direccionesPersonas[8], [moto2], EstadoCivil.SOLTERO),
  new Persona("Sara", 40, direccionesPersonas[9], [carro1, moto2], EstadoCivil.CASADO),
]

personas.forEach(persona =>{persona.saludar(),persona.direccion.imprimirCiudad()})

const direccionesEmpleados: Direccion[] = [

  {calle: 111, ciudad: "Cartagena", pais: "Colombia", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 112, ciudad: "Manizales", pais: "Colombia", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 113, ciudad: "Sao Paulo", pais: "Brasil", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 114, ciudad: "Chicago", pais: "Estados Unidos", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 115, ciudad: "Nueva York", pais: "Estados Unidos", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 116, ciudad: "Sevilla", pais: "España", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 117, ciudad: "Valencia", pais: "España", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 118, ciudad: "Monterrey", pais: "México", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 119, ciudad: "Guadalajara", pais: "México", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},
  {calle: 120, ciudad: "Bucaramanga", pais: "Colombia", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}},

]
const empleados: Empleado[] = [
  new Empleado("Andres", 52, 6000000, direccionesEmpleados[0], [carro1], EstadoCivil.CASADO, []),
  new Empleado("Camila", 25, 3500000, direccionesEmpleados[1], [carro1], EstadoCivil.SOLTERO,[]),
  new Empleado("Merlyn", 29, 4000000, direccionesEmpleados[2], [carro1], EstadoCivil.UNION_LIBRE,[]),
  new Empleado("Julian", 30, 5000000, direccionesEmpleados[3], [carro1], EstadoCivil.CASADO,[]),
  new Empleado("Valentina", 35, 4000000, direccionesEmpleados[4], [carro1], EstadoCivil.UNION_LIBRE,[]),
  new Empleado("Jaime", 33, 4300000, direccionesEmpleados[5], [carro1], EstadoCivil.CASADO, []),
  new Empleado("Viviana", 27, 3300000, direccionesEmpleados[6], [carro1], EstadoCivil.SOLTERO, []),
  new Empleado("Sebastian", 39, 4500000, direccionesEmpleados[7], [carro1], EstadoCivil.CASADO, []),
  new Empleado("Luis", 32, 4100000, direccionesEmpleados[8], [carro1], EstadoCivil.SOLTERO,[]),
  new Empleado("Karla", 40, 5000000, direccionesEmpleados[9], [carro1], EstadoCivil.CASADO,[]),
]
empleados.forEach(empleado => {empleado.saludar(), empleado.direccion.imprimirCiudad()})


crearPersona();
//empleados nuevos
const direccion11: Direccion = {calle: 201, ciudad:"Berlin", pais: "Alemania", imprimirCiudad() {console.log(`De La ciudad de ${this.ciudad}`)}}
const empleado11 = new Empleado ("Camilo", 30, 2000000, direccion11, [], EstadoCivil.SOLTERO, [])
const empleado12 = new Empleado ("Stefania", 26, 1500000, direccion11, [], EstadoCivil.SOLTERO, []) 

//empresa nueva
const empresa1= new Empresa("Frotex", [])
empresa1.agregarEmpleado(empleado11)
empresa1.agregarEmpleado(empleado12)

const totalSalarios = empresa1.calcularTotalSalarios()
console.log(`total de salarios de ${empresa1.nombre} es ${totalSalarios}`)

//nuevo proyecto
const proyecto1 = new Proyecto ("Secuoya", [])
proyecto1.agregarEmpleadoAProy(empleado11)
proyecto1.agregarEmpleadoAProy(empleado12)
proyecto1.listarEmpleadosProy()

//nuevo departamento
const departamentoMercadeo = new Departamento ("Mercadeo", [])
departamentoMercadeo.agregarEmpleadoADep(empleado11)
departamentoMercadeo.agregarEmpleadoADep(empleado12)

departamentoMercadeo.listarEmpleadosDep()