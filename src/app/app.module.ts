import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path:'demo',loadChildren:'./demo/demo.module#DemoModule' },
{ path:'**', redirectTo:'demo' 
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatterialModule,
    FormsModule,
 
    RouterModule
 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
