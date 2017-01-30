import {Routes, RouterModule} from "@angular/router";
//import {HomeComponent} from "./home.component";
import {SigninComponent} from "./login/signin/signin.component";
import {MediaGuard} from "./media/media.guard";

const APP_ROUTES: Routes = [
    //{path: '', component: HomeComponent},
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'media', loadChildren: 'app/media/media.module#MediaModule', canActivate: [MediaGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
