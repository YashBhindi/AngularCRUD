import { ItemListServicesService } from './../item-list-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({ 
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items=[];
  
  constructor(private itemListServicesService : ItemListServicesService , 
    private router : Router )  { }

  ngOnInit() {
    
    this.itemListServicesService.getItems().subscribe(data => this.items = data);
  }

  key: string = 'name'; //set default

  reverse: boolean = false;
  
  //initializing p to one
  p: number = 1;

  sort(key){

    this.key = key;

    this.reverse = !this.reverse;

  }

  getItemDetail(item){
    this.router.navigate(['/itemlist',item.Number]);
  }
  incrementQuantityByOne($event){
    $event.stopPropagation()
  }
  decrementQuantityByOne($event){
    $event.stopPropagation()
  }

  deleteItem($event ,item){
    $event.stopPropagation();

    this.itemListServicesService.deleteItem(item);
  }
  updateItem($event,item){
    $event.stopPropagation();
    this.router.navigate(['/itemlist/update',item.Number]);

  } 

}
