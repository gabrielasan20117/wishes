import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public listas: Lista[] = [];

  constructor() {
    this.loadStorage();
  }

  createLista(title: string){
    const listnew = new Lista(title);
    this.listas.push(listnew);
    this.saveStorage();
    return listnew.id;
  }

  getLista(id:number|string){
    id = Number(id);
    return this.listas.find( data => {
      return data.id === id;
    })
  }
  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage(){
    if (localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data') || '{}' );
    }
  }
}
