export class Tarea{

    title: string;
    description: string;
    complete: boolean;

    constructor(pTitle = '', pDescription=''){
        this.title = pTitle;
        this.description = pDescription;
        //opcional
        this.complete = false;

    }

}