import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: Lista;
  nameItem: '';

  constructor(private services : WishesService,
              private router : ActivatedRoute) { 
    const listId = this.router.snapshot.paramMap.get('listaId');
    this.list = this.services.getLista(listId);
  }

  ngOnInit() {
  }
  
  createItem(){
    if(this.nameItem.length === 0){
      return;
    }
    const newItem = new ListaItem(this.nameItem);

  }

}
