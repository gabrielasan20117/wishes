import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: any;
  constructor(public deseos: WishesService,
              private router: Router,
              private alert: AlertController) {
    this.get_listas()
    
  }

  get_listas(){
    this.lista = this.deseos.listas
    return this.lista
  }
  
  async add_lista(){
    
    const alert = await this.alert.create({
      header: 'Nuew List',
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Create",
          handler: (data) =>{
            console.log(data)
            if(data.title.length === 0){
              return;
            }else{
              const id = this.deseos.createLista(data.title)
              this.router.navigateByUrl(`tabs/tab1/add/${id}`)
            }
          }
        }
      ],
      inputs: [
        {
          name:'title',
          label: 'title',
          type: 'text',
          placeholder: 'Name of the list',
        },
      ],
    });
    alert.present();
    
  }
}
