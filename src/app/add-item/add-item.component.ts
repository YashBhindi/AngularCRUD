import { ItemsInterface } from './../ItemsInterface';
import { ItemListServicesService } from './../item-list-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  obj : {};
  Num : number;
  Quantity : number;
  Price : number;
  Name : string;
  itemNumber : number;
  private item : ItemsInterface;
  flag : boolean=false;
  //flag1 : boolean=true;

  constructor(private itemListServicesService: ItemListServicesService,private router : Router,private route : ActivatedRoute) { }
  ngOnInit() {
    this.flag=false;
    this.itemNumber=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log("flag"+this.flag+"item number"+this.itemNumber);
      if(!isNaN(this.itemNumber)){
//        console.log("flag"+this.flag+"item number"+this.itemNumber);

        this.loadData();
        this.flag=true;
        //this.flag1=false;
      }
  }
  loadData(){
    this.item=this.itemListServicesService.getItemDetails(this.itemNumber);
     
      this.Num = this.item.Number,
      this.Name = this.item.Name,
      this.Price = this.item.Price, 
      this.Quantity = this.item.Quantity ;
    
  }

  addItem(){  
      this.obj ={ Number : this.Num,
                  Name : this.Name,
                  Price : this.Price, 
                  Quantity : this.Quantity };
      
      this.itemListServicesService.addItemToList(this.obj);
      this.router.navigateByUrl('itemlist');
  }

  updateItem(){
    this.obj ={ Number : this.Num,
      Name : this.Name,
      Price : this.Price, 
      Quantity : this.Quantity };
    console.log(this.obj);
      this.itemListServicesService.updateItem(this.obj);
      this.router.navigateByUrl('itemlist');
  }
}
