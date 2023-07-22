import { ListaItem } from "./lista-item.model";

export class Lista {

    id: number;
    title: string;
    create_date: Date;
    // end_date: Date;
    end: Boolean;
    items: ListaItem[];
    
    constructor(t: string){
        this.title = t;
        this.create_date = new Date();
        this.end = false;
        this.items = [];
        this.id = new Date().getTime();
    }
    
}