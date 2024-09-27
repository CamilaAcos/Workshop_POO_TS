import { Persona } from "./Persona"
import {Empleado} from "./Empleado"

const personas: Persona[] = [
    new Persona("Jose", 52),
    new Persona("Laura", 25),
    new Persona("Andrea", 29),
    new Persona("Alejandro", 30),
    new Persona("Eliana", 35),
    new Persona("Julio", 33),
    new Persona("Valeria", 27),
    new Persona("Santiago", 39),
    new Persona("Samuel", 32),
    new Persona("Sara", 40),
  ]
  
  personas.forEach(persona => persona.saludar())

  const empleados: Empleado[] = [
    new Empleado("Jose", 52, 6000000),
    new Empleado("Laura", 25, 3500000),
    new Empleado("Andrea", 29, 4000000),
    new Empleado("Alejandro", 30, 5000000),
    new Empleado("Eliana", 35, 4000000),
    new Empleado("Julio", 33, 4300000),
    new Empleado("Valeria", 27, 3300000),
    new Empleado("Santiago", 39, 4500000),
    new Empleado("Samuel", 32, 4100000),
    new Empleado("Sara", 40, 5000000),
  ]
  empleados.forEach(empleado => empleado.saludar())