import { Component, OnInit } from '@angular/core';
import { SessionStorageService} from 'ng2-webstorage';
import { Router, UrlSegment } from '@angular/router';
import {UserAuthenticationService} from '../user-authentication.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  mobile : string;
  password : string;
  
  constructor(private router : Router , public sessionObj :SessionStorageService , private userAutgh : UserAuthenticationService) { }


  ngOnInit() {
  }

  onSignIn(){
    console.log("in sign in method");
    console.log(this.mobile);
    console.log(this.password);
    
    this.userAutgh.authenticateUser(this.mobile,this.password);

  }

}
