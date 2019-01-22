import { ItemsInterface } from './../ItemsInterface';
import { ItemListServicesService } from './../item-list-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item} from '../item';
import { Router } from '@angular/router';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  num : number;

  item : Item;
  flag : boolean=false;
 

  constructor(private itemListServicesService: ItemListServicesService,private router : Router,private route : ActivatedRoute) { }
  ngOnInit() {
    this.flag=false;
    this.item=new Item();
    this.num=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.num);
      if(!isNaN(this.num)){
        this.item.itemNumber=this.num;
        this.loadData();
        this.flag=true;
        
        console.log(this.flag);
        console.log(this.item.itemNumber);
      }
  }
  loadData(){
    this.item=this.itemListServicesService.getItemDetails(this.item.itemNumber);
  }

  addItem(){      
    console.log(this.item);
      this.itemListServicesService.addItemToList(this.item);
     
      this.router.navigateByUrl('itemlist');
  }

  updateItem(){
      this.itemListServicesService.updateItem(this.item);
      this.router.navigateByUrl('itemlist');
  }
}
