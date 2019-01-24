import { UserAuthenticationService } from './user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FavouriteChangedEventArgs } from './comp1/compTest.component';
import { SessionStorageService} from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  
  
  showBeforeLogin:any = true;
  showAfterLogin:any = false;

  constructor(public router: Router, private sessionObj :SessionStorageService , private auth :UserAuthenticationService){

    this.changeOfRoutes();
  }
  ngOnInit(){
    //this.auth.getToken().subscribe(data => this.flag = data);
  }
  
  
    changeOfRoutes(){
    if(this.router.url === '/' || this.router.url === '/signin' || this.router.url === '/signup'){
      this.showAfterLogin = true;
      console.log("after login home page");
    }
    else{
      this.showAfterLogin = false;
      console.log("after login not home page");
    }
}
}
