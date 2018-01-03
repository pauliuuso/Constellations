import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

import { LinkService } from './link.service';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';


const appRoutes: Routes =
[
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    GalleryItemComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [LinkService, UserService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
