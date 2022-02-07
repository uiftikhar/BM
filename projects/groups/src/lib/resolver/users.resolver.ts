// this.usersService
//       .get()
//       .pipe(take(1))
//       //
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUsers } from '../../../../home/src/lib/home.service';
import { UsersService } from '../../../../users/src/lib/users.service';

@Injectable()
export class UsersResolver
  implements Resolve<Observable<(IUsers & { selected: boolean })[]>>
{
  constructor(private readonly userService: UsersService) {}

  resolve(): Observable<(IUsers & { selected: boolean })[]> {
    return this.userService
      .get()
      .pipe(map((res) => res.map((user) => ({ ...user, selected: false }))));
  }
}
