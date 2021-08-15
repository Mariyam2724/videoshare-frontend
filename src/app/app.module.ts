import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import{ FormsModule, ReactiveFormsModule  } from'@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { AddVideoComponent } from './add-video/add-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    AddVideoComponent,
    ViewVideoComponent,
    ManageVideoComponent,
    HeaderComponent,
    HomeComponent,
    

  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
