import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router, NavigationEnd } from '@angular/router'

import { Observable } from 'rxjs'

import { MEAT_API } from '../../app.api'
import { User } from '../../security/login/user.model'
import { tap, filter } from 'rxjs/operators'

@Injectable()
export class LoginService {

  user: User
  lastUrl: string

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                      .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
  }

  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
                    .pipe(tap(user => this.user = user))
  }

  logout() {
    this.user = undefined
    if(this.lastUrl === '/order')
      this.router.navigate(['/login'])
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]) //this.router.navigate(['/login'], { queryParams: { to: URL } });
  }
}
