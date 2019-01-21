import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { compTest } from './comp1/compTest.component';
import { FormsModule, ReactiveFormsModule ,FormBuilder,Validator ,FormArray} from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListServicesService} from './item-list-services.service';
import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
@NgModule({
  declarations: [
    AppComponent ,
    compTest,
    PanelComponent,
    ContactFormComponent,
    routingComponents,
    PageNotFoundComponentComponent,
    ItemDetailComponentComponent,
    MyProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [ ItemListServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
