import { Persona } from "./Persona";
import { Vehiculo } from "./Vehiculo";

export const convertirJsonAPersona = (jsonNuevaPersona: any): Persona => {
    const nombre = jsonNuevaPersona.nombre;
    const edad = jsonNuevaPersona.edad;
    const direccion = jsonNuevaPersona.direccion;
    const vehiculos = jsonNuevaPersona.vehiculos;
    return new Persona(nombre, edad, direccion, vehiculos);
}

export const crearPersona = (): void => {
    const jsonNuevaPersona = {
        nombre: 'Hugo',
        edad: 27,
        dirección: {
            calle: 121,
            ciudad: "Barcelona",
            pais: "España",
        },
        vehiculos:["EHM735","JBQ165"]
    }

    const personaNueva = convertirJsonAPersona(jsonNuevaPersona);
    personaNueva.saludar(); 
    
    //por que no me funcionó asi?: convertirJsonAPersona(jsonNuevaPersona).saludar
}