import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediaListComponent } from './media/media-list/media-list.component';
import { MediaDetailComponent } from './media/media-detail/media-detail.component';
import { MediaItemComponent } from './media/media-list/media-item.component';
import {routing} from "./app.routing";
import { MediaStartComponent } from './media/media-start.component';
import { MediaEditComponent } from './media/media-edit/media-edit.component';
import {MediaService} from "./media/media.service";

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaListComponent,
    MediaDetailComponent,
    MediaItemComponent,
    MediaStartComponent,
    MediaEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
