import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import { IUsers } from 'projects/home/src';
import {
  Observable,
  Subject,
} from 'rxjs';
import {
  map,
  scan,
  startWith,
  take,
  tap,
} from 'rxjs/operators';

import { UsersService } from '../users.service';

@Component({
  selector: 'lib-users',
  template: `
    <app-nav></app-nav>
    <app-content>
      <button><a href="/users/add">add user</a></button>
      <div class="container">
        <div class="row">
          <div class="col">
            <h6>Users</h6>
            <ul class="list-group">
              <ng-container *ngFor="let user of users$ | async">
                <li
                  class="list-group-item pointer"
                  [routerLink]="'/edit'"
                  [queryParams]="{ id: user.id }"
                >
                  <div>
                    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
                    <h4>{{ user.gender }}</h4>
                    <h4>{{ user.email }}</h4>
                    <button (click)="deleteUser(user.id)">delete</button>
                  </div>
                </li>
              </ng-container>
            </ul>
          </div>
        </div>
      </div>
    </app-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  private usersSubject = new Subject();
  public users$: Observable<(IUsers & { showUser: boolean })[]>;
  constructor(private readonly userService: UsersService) {}

  mapUsers(users: IUsers[]) {
    return users.map((user: IUsers & { showUser: boolean }) => {
      user.showUser = true;
      return user;
    });
  }

  ngOnInit(): void {
    this.users$ = this.usersSubject.pipe(
      startWith([] as IUsers[]),
      scan((acc: any, val) => {
        if (val.op && val.op === 'delete') {
          var index = acc.findIndex((elt: { id: any }) => elt.id === val.id);
          acc.splice(index, 1);
          return acc;
        } else {
          return acc.concat(val);
        }
      }),
      map((users: IUsers[]) => this.mapUsers(users))
    );

    this.userService
      .get()
      .pipe(
        take(1),
        map((users: IUsers[]) => this.mapUsers(users)),
        tap((res) => this.usersSubject.next(res))
      )
      .subscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(
        take(1),

        tap(() => {
          this.usersSubject.next({ op: 'delete', id: '1' });
        })
      )
      .subscribe();
  }
}
