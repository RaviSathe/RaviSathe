import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {  } from '.angular/common/HttpCli'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { AdduserComponent } from './allcompo/adduser/adduser.component';
import { TableComponent } from './allcompo/table/table.component';
import { AboutComponent } from './allcompo/about/about.component';
import { ContactComponent } from './allcompo/contact/contact.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './allcompo/update/update.component';
@NgModule({
  
  declarations: [
    AppComponent,
    IndexComponent,
    AdduserComponent,
    TableComponent,
    AboutComponent,
    ContactComponent,
    UpdateComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
