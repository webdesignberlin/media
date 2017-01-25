import {Routes, RouterModule} from "@angular/router";
import {MediaStartComponent} from "./media-start.component";
import {MediaEditComponent} from "./media-edit/media-edit.component";
import {MediaDetailComponent} from "./media-detail/media-detail.component";
import {MediaComponent} from "./media.component";
import {MediaModule} from "./media.module";

const MEDIA_ROUTES: Routes = [
    { path: '', component: MediaComponent, children: [
        { path: '', component: MediaStartComponent },
        { path: 'new', component: MediaEditComponent },
        { path: ':id', component: MediaDetailComponent },
        { path: ':id/edit', component: MediaEditComponent }
    ]}
];

export const mediaRouting = RouterModule.forChild(MEDIA_ROUTES);
