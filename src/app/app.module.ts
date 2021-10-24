import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './user/booking/booking.component';
import { BookingDetailComponent } from './user/booking-detail/booking-detail.component';

const routeApp:Routes=[
  {path:'user',component:UserComponent,
  children:[
    {path:'book',component:BookingComponent},
    {path:':id',component:BookingDetailComponent},
    {path:':id/edit',component:BookingComponent}
  ]},
  {path:'admin',component:AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    BookingComponent,
    BookingDetailComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
