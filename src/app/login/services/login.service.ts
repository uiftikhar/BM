import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  authenticate(username: string, password: string) {
    return this.http
      .post('http://localhost:3000/login', {
        email: username,
        password: password,
      })
      .pipe(
        tap((res: any) => {
          localStorage.setItem('accessToken', res.accessToken);
          this.router.navigate(['home']);
        })
      );
  }
}
