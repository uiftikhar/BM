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
                <li class="list-group-item pointer">
                  <div [routerLink]="'/edit'" [queryParams]="{ id: user.id }">
                    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
                    <h4>{{ user.gender }}</h4>
                    <h4>{{ user.email }}</h4>
                  </div>
                  <button (click)="deleteUser(user.id)">delete</button>
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
  public users$: Observable<IUsers[]>;
  constructor(private readonly userService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersSubject.pipe(
      startWith([] as IUsers[]),
      scan((acc: IUsers[], val: IUsers[] & { op: string; id: number }) => {
        if (val.op && val.op === 'delete') {
          acc = acc.filter((item) => item.id !== val.id);
          return acc;
        } else {
          return acc.concat(val);
        }
      })
    );

    this.userService
      .get()
      .pipe(
        take(1),
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
          this.usersSubject.next({ op: 'delete', id });
        })
      )
      .subscribe();
  }
}
