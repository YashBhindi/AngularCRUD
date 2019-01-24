import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { compTest } from './comp1/compTest.component';
import { FormsModule, ReactiveFormsModule ,FormBuilder,Validator ,FormArray} from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListServicesService} from './item-list-services.service';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Ng2Webstorage } from 'ng2-webstorage'

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignInComponent } from './sign-in/sign-in.component'; //importing the module
import { AuthGuardGuard} from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
@NgModule({
  declarations: [
    AppComponent ,
    compTest,
    PanelComponent,
    routingComponents,
    PageNotFoundComponentComponent,
    ItemDetailComponentComponent,
    MyProfileComponent,
    SignInComponent,
    HomeComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2Webstorage
  ],
  providers: [ ItemListServicesService , AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
