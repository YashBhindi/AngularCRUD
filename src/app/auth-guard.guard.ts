import { UserAuthenticationService } from './user-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private auth: UserAuthenticationService,private myRoute: Router){}
  
  canActivate() : boolean {
    if(this.auth.getToken()){
      console.log("true");
      return true;
    }else{
      window.alert("Login please");
      this.myRoute.navigateByUrl("/signin");
      return false;
    }
  }
}
