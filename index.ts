import { Persona } from "./Persona"
import { Empleado } from "./Empleado"
import { Direccion } from "./Direccion"
import { crearPersona } from "./util"

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
  

const personas: Persona[] = [
  new Persona("Jose", 52, direccionesPersonas[0]),
  new Persona("Laura", 25, direccionesPersonas[1]),
  new Persona("Andrea", 29, direccionesPersonas[2]),
  new Persona("Alejandro", 30, direccionesPersonas[3]),
  new Persona("Eliana", 35, direccionesPersonas[4]),
  new Persona("Julio", 33, direccionesPersonas[5]),
  new Persona("Valeria", 27, direccionesPersonas[6]),
  new Persona("Santiago", 39, direccionesPersonas[7]),
  new Persona("Samuel", 32, direccionesPersonas[8]),
  new Persona("Sara", 40, direccionesPersonas[9]),
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
  new Empleado("Andres", 52, 6000000, direccionesEmpleados[0]),
  new Empleado("Camila", 25, 3500000, direccionesEmpleados[1]),
  new Empleado("Merlyn", 29, 4000000, direccionesEmpleados[2]),
  new Empleado("Julian", 30, 5000000, direccionesEmpleados[3]),
  new Empleado("Valentina", 35, 4000000, direccionesEmpleados[4]),
  new Empleado("Jaime", 33, 4300000, direccionesEmpleados[5]),
  new Empleado("Viviana", 27, 3300000, direccionesEmpleados[6]),
  new Empleado("Sebastian", 39, 4500000, direccionesEmpleados[7]),
  new Empleado("Luis", 32, 4100000, direccionesEmpleados[8]),
  new Empleado("Karla", 40, 5000000, direccionesEmpleados[9]),
]
empleados.forEach(empleado => {empleado.saludar(), empleado.direccion.imprimirCiudad()})


crearPersona();
