import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddItemComponent } from './add-item/add-item.component';
import {ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuardGuard} from './auth-guard.guard'




const routes: Routes = [
  {path : '' , redirectTo : '/signin' , pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'itemlist', component : ItemListComponent , canActivate: [AuthGuardGuard]},
  {path : 'additem', component : AddItemComponent , canActivate: [AuthGuardGuard]},
  {path : 'signup', component : SignUpComponent},
  {path : 'signin' , component : SignInComponent},
  {path : 'itemlist/update/:id' , component : AddItemComponent ,  canActivate: [AuthGuardGuard]},
  {path : 'itemlist/:id' , component : ItemDetailComponentComponent ,  canActivate: [AuthGuardGuard]},
  {path : 'myprofile' , component : MyProfileComponent ,  canActivate: [AuthGuardGuard]},



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
 