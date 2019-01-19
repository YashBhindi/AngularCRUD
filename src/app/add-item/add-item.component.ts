import { ItemsInterface } from './../ItemsInterface';
import { ItemListServicesService } from './../item-list-services.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  obj : {};
  Number : Number;
  Quantity : Number;
  Price : Number;
  Name : string;
  constructor(private itemListServicesService: ItemListServicesService,private router : Router) { }
  ngOnInit() {
  }

  addItem(){
      
      console.log(this.Name);
      console.log(this.Number);
      this.obj ={ Number : this.Number,
                  Name : this.Name,
                  Price : this.Price, 
                  Quantity : this.Quantity };
      console.log(this.obj); 
      this.itemListServicesService.addItemToList(this.obj);
      this.router.navigateByUrl('itemlist');
  }

}
