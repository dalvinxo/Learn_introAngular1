export class Producto{

    nombreProducto: string;
    imagenUrl: string;
    precioProducto: number;
    cantidad: number;

    constructor(pNombre: string, pImagenURL: string, pPrecio: number){
        this.nombreProducto = pNombre;
        this.imagenUrl = pImagenURL;
        this.precioProducto = pPrecio;
        this.cantidad = 0;

    }

}