import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';


const appRoutes: Routes =
[
  {
    path: '',
    component: IntroComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
