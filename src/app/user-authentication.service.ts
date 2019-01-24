import { SubGroup } from './SubGroup';
import { Router, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService} from 'ng2-webstorage';

import { Item} from './item';
import { User} from './User';
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
    private _url : string = "/assets/data/user-list.json";
    private subGroup : SubGroup=new SubGroup("jam","123456"); 
   
    user=new User("yash", 
    "soni",
     "male",
     "student",
     "300123",
     "yash@gmail.com",
     "123",
     "123",  
      this.subGroup,
     true );

    private users: User[] =[this.user];

    
    
    constructor(private http : HttpClient,private router : Router , public sessionObj :SessionStorageService) { }

    getUserMobile(user) : string{
      return user.mobile;
    }
    getUserPassword(user) : string{
      return user.password;
    }

    getUsers() : Observable<User[]>{
      // return this.http.get<ItemsInterface[]>(this._url);
      return of (this.users);
    } 
    
    getUserDetails(mobile) : User {
     // return this.items.find(x => x.Number === id);
      return this.users.find(x => x.mobile === mobile);
    }

    addUserToList(user){
        this.users.push(user);
        this.sessionObj.store("username",user.firstName);
        console.log(this.users);
       // this.router.navigate(['itemlist']);
    }

    deleteUser(user){
        let index = this.users.findIndex(x=>x.mobile === user.mobile);
        this.users.splice(index,1);  
    }

    updateUser(user){
     let index = this.users.findIndex(x=>x.mobile == user.mobile);
      console.log(user.mobile)
      this.users.splice(index,1,user);
    }

    authenticateUser(mobile,password){
        console.log(mobile);
        console.log(password);
        let userMobile = this.users.findIndex(x => x.mobile === mobile);
        console.log(userMobile);
        if(userMobile !== undefined) {
            let userPassword = this.users.findIndex(x => x.password === password);
            console.log(userPassword);
            if(userPassword !== undefined){
                this.sessionObj.store("username", this.users[userPassword].firstName);
                //  this.router.navigate(['itemlist',userMobile]);
                alert('SUCCESS!! :-)');
                this.router.navigateByUrl('/itemlist')
            }           
        }
        else
        alert('FAILED!! :-)');
    }
    getToken(): boolean{
        return  (!!this.sessionObj.retrieve("username"));
    }

    deleteSession(){
        this.sessionObj.clear;
    }

    
}
