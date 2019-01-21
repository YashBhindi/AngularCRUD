import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddItemComponent } from './add-item/add-item.component';
import {ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';




const routes: Routes = [
  {path : '' , redirectTo : '/itemlist' , pathMatch : 'full'},
  {path : 'itemlist', component : ItemListComponent},
  {path : 'additem', component : AddItemComponent},
  {path : 'signup', component : SignUpComponent},
 {path : 'itemlist/update/:id' , component : AddItemComponent},
  {path : 'itemlist/:id' , component : ItemDetailComponentComponent},
  {path : 'myprofile' , component : MyProfileComponent},



  {path : "**" , component : PageNotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AddItemComponent,
  ItemListComponent,
  SignUpComponent,
  ItemDetailComponentComponent,
  MyProfileComponent
];
 