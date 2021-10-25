import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './user/booking/booking.component';
import { BookingDetailComponent } from './user/booking-detail/booking-detail.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { MovieInfoComponent } from './admin/movie-info/movie-info.component';


const routeApp:Routes=[
  {path:'user',component:UserComponent,
  children:[
    {path:'book',component:BookingComponent},
    {path:':id',component:BookingDetailComponent},
    {path:':id/edit',component:BookingComponent}
  ]},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'new',component:CreateMovieComponent},
    {path:':id',component:MovieInfoComponent},
    {path:':id/edit',component:CreateMovieComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    BookingComponent,
    BookingDetailComponent,
    CreateMovieComponent,
    MovieInfoComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeApp),
    FormsModule,
    CommonModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
