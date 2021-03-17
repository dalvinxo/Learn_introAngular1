export class DepartamentoProducto{
    nombre: string;
    cantidad: number;
    departamento: string;

    constructor(pNombre: string = '', pCantidad: number = 1, pDepartamento = ''){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
    }

}