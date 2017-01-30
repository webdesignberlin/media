import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {MediaService} from "./media/media.service";
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from "./home.component";
import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./login/auth.service";
import {MediaGuard} from "./media/media.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MediaService, AuthService, MediaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
