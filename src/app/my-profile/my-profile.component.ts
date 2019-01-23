import { Component, OnInit } from '@angular/core';
import { SessionStorageService} from 'ng2-webstorage';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor( private sessionObj :SessionStorageService) { }

  ngOnInit() {
    this.sessionObj.store('key','val');
    
  }

  

}
