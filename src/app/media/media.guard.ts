import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../login/auth.service";

@Injectable()
export class MediaGuard implements CanActivate {
    constructor(private AuthService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.AuthService.isAuthenticated().first();
    }
}
