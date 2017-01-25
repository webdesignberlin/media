import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'media', loadChildren: 'app/media/media.module#MediaModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
