import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

import { IUsers } from 'projects/home/src';
import { Observable } from 'rxjs';

import { UsersService } from '../../users.service';

@Injectable()
export class UserResolver implements Resolve<Observable<IUsers>> {
  constructor(private readonly userService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUsers> {
    return this.userService.getById(route.queryParams.id);
  }
}
