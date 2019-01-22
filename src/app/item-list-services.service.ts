import { Router } from '@angular/router';
import { ItemsInterface } from './ItemsInterface';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemListServicesService {
    private _url : string = "/assets/data/iteml-list.json";
    private items: Item[] = [
      { "itemNumber" : 1 ,"name" : "book" , "price" : 20 , "quantity" : 23 },
      { "itemNumber" : 2 ,"name" : "pen" , "price" : 2 , "quantity" : 20},
      { "itemNumber" : 3 ,"name" : "pencil" , "price" : 5 , "quantity" : 15}
      ];
    constructor(private http : HttpClient,private router : Router) { }

    getItemNumber(item) : number{
      return item.itemNuber;
    }

    getItemIndex(item) : number{
      return item.itemNumber;
    }
    getItems() : Observable<Item[]>{
      // return this.http.get<ItemsInterface[]>(this._url);
      return of (this.items);
    } 
    
    getItemDetails(id) : Item {
     // return this.items.find(x => x.Number === id);
      return this.items.find(x => x.itemNumber === id);
    }

    addItemToList(item){
        this.items.push(item);
       // this.router.navigate(['itemlist']);
    }

    deleteItem(item){
        
        let index = this.items.findIndex(x=>x.name === item.name);
        this.items.splice(index,1);
        
    }

    updateItem(item){
     let index = this.items.findIndex(x=>x.name == item.name);
      console.log(item.name)
      this.items.splice(index,1,item);
    }

    
}
