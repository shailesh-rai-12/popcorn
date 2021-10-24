import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const routeApp:Routes=[
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
