export class Empleado{

    nombre: string;
    edad: number;
    pais: string;
    imagen: string;

    constructor(pNombre: string, pEdad: number, pPais: string, pImagen: string){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.pais = pPais;
        this.imagen = pImagen;
    }

}