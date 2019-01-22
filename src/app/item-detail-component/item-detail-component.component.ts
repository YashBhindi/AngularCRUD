import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemListServicesService } from './../item-list-services.service';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { ItemsInterface } from '../ItemsInterface';
import { Item } from '../item';


@Component({
  selector: 'app-item-detail-component',
  templateUrl: './item-detail-component.component.html',
  styleUrls: ['./item-detail-component.component.css']
})
export class ItemDetailComponentComponent implements OnInit {
  itemNumber ;
  private item : Item;
  constructor( private route : ActivatedRoute ,private itemListServicesService : ItemListServicesService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.itemNumber=id;
    this.item=this.itemListServicesService.getItemDetails(this.itemNumber);
    console.log(this.item);
  }


}
