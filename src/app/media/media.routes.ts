import {Routes} from "@angular/router";
import {MediaStartComponent} from "./media-start.component";
import {MediaEditComponent} from "./media-edit/media-edit.component";
import {MediaDetailComponent} from "./media-detail/media-detail.component";

export const MEDIA_ROUTES: Routes = [
    { path: '', component: MediaStartComponent },
    { path: 'new', component: MediaEditComponent },
    { path: ':id', component: MediaDetailComponent },
    { path: ':id/edit', component: MediaEditComponent }
];
