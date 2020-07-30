import { Injectable } from '@angular/core'
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router'

import { LoginService } from '../shared/services/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginServive: LoginService) { }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginServive.isLoggedIn()
    if (!loggedIn) {
      this.loginServive.handleLogin(`/${path}`)
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  canActivate(activateRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activateRoute.routeConfig.path)
  }
}
