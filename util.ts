import { Persona } from "./Persona";

export const convertirJsonAPersona = (jsonNuevaPersona: any): Persona => {
    const nombre = jsonNuevaPersona.nombre;
    const edad = jsonNuevaPersona.edad;
    const direccion = jsonNuevaPersona.direccion;
    return new Persona(nombre, edad, direccion);
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
    }

    const personaNueva = convertirJsonAPersona(jsonNuevaPersona);
    personaNueva.saludar(); 
    
    //por que no me funcionó asi?: convertirJsonAPersona(jsonNuevaPersona).saludar
}