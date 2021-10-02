import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import {LogInComponent  } from './log-in/log-in.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { SignupComponent } from './signup/signup.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'login', component:LogInComponent},
  { path: 'register', component: SignupComponent },
  { path: 'addvideo', component:  AddVideoComponent},
  { path: 'managevideo', component:  ManageVideoComponent},
  { path: 'view/:videoId', component:  ViewVideoComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
