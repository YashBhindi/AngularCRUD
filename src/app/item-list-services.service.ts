import { Router } from '@angular/router';
import { ItemsInterface } from './ItemsInterface';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemListServicesService {
    private _url : string = "/assets/data/iteml-list.json";
    private items = [
      { "Number" : 1 ,"Name" : "Book" , "Price" : 20 , "Quantity" : 23 },
      { "Number" : 2 ,"Name" : "Pen" , "Price" : 2 , "Quantity" : 20},
      { "Number" : 3 ,"Name" : "Pencil" , "Price" : 5 , "Quantity" : 15}
      ];
    constructor(private http : HttpClient,private router : Router) { }

    getItemNumber(item) : number{
      return item.Number;
    }

    getItemIndex(item) : number{
      return item.Number;
    }
    getItems() : Observable<ItemsInterface[]>{
      // return this.http.get<ItemsInterface[]>(this._url);
      return of (this.items);
    } 
    
    getItemDetails(id) : ItemsInterface{
      return this.items.find(x => x.Number === id);
    }

    addItemToList(item){
        this.items.push(item);
       // this.router.navigate(['itemlist']);
    }

    deleteItem(item){
        
        let index = this.items.findIndex(x=>x.Name === item.Name);
        this.items.splice(index,1);
        
    }

    updateItem(item){
     let index = this.items.findIndex(x=>x.Name == item.Name);
      console.log(item.Name)
      this.items.splice(index,1,item);
    }

    
}
