import { ItemListServicesService } from './../item-list-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items=[];
  uSelect : boolean[];
  constructor(private itemListServicesService : ItemListServicesService , 
    private router : Router )  { }

  ngOnInit() {
    this.uSelect[0]=true;
    this.itemListServicesService.getItems().subscribe(data => this.items = data);
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

  deleteItem($event ,index){
    $event.stopPropagation()
    this.itemListServicesService.deleteItem(index);
  }
  updateItem($event){
    $event.stopPropagation()
  } 

}
