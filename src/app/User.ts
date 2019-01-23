import {SubGroup } from './SubGroup'
export class User {

    constructor(
        
        
     public firstName : string, 
     private  lastName : string,
     private    gender : string,
     private postion : string,
     public  mobile : string,
     private   emailId : string,
     public  password : string,
     private  confirmPwd : string,

     private  address : SubGroup,      
     
     private   subscribe : boolean ,        
          
     ){}
}
