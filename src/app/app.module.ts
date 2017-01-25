import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {MediaService} from "./media/media.service";
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
