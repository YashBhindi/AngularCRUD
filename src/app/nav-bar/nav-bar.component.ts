import { Router } from '@angular/router';
import { UserAuthenticationService } from './../user-authentication.service';
import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  navbar:boolean;
  constructor( private userAutgh : UserAuthenticationService , private router : Router ) { 
    
  }

  ngOnInit() {
    
  }

  onSignOut(){
    this.userAutgh.deleteSession();
    this.router.navigateByUrl("signin")
  }

}
