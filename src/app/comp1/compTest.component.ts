import { Component , Input, OnInit,Output,EventEmitter} from '@angular/core';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Component({
  selector: 'yash',
  templateUrl: 'compTest.component.html'
})

export class compTest implements OnInit{
 
  @Input('isFavourite')
  isFavourites : boolean;
  
  @Output() change = new EventEmitter();
  ngOnInit(){
  }
  onClick(){
    this.isFavourites=!this.isFavourites;
    
    this.change.emit({newValue : this.isFavourites,name : 'yash'});
  }
}
export interface FavouriteChangedEventArgs {
  newValue : boolean;
  name : string;
}