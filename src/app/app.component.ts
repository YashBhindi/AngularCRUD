import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './comp1/compTest.component';
@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  
  viewMode="list";
  
}
