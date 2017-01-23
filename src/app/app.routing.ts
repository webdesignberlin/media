import {Routes, RouterModule} from "@angular/router";
import {MediaComponent} from "./media/media.component";
import {MEDIA_ROUTES} from "./media/media.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/media', pathMatch: 'full'},
    {path: 'media', component: MediaComponent, children: MEDIA_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);