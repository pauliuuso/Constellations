import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

import { LinkService } from './link.service';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes =
[
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LinkService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
