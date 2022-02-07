import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUsers } from 'projects/home/src';
import {
  forkJoin,
  Observable,
} from 'rxjs';
import {
  map,
  mergeMap,
} from 'rxjs/operators';

import { IGroups } from '../../../../home/src/lib/home.service';

@Injectable()
export class GroupsService {
  constructor(private readonly http: HttpClient) {}
  get() {
    return this.http.get<IGroups[]>('/api/groups');
  }

  getById(id: string): Observable<
    IGroups & {
      users: {
        id: number;
        name: string;
      }[];
    }
  > {
    return this.http.get<IGroups>(`/api/groups/${id}`).pipe(
      mergeMap((group) =>
        forkJoin(
          group.user_ids.map((id) => this.http.get<IUsers>(`/api/users/${id}`))
        ).pipe(
          map((users) => ({
            ...group,
            users: users
              ? users.map((user) => ({
                  id: user.id,
                  name: `${user.first_name} ${user.last_name}`,
                }))
              : [],
          }))
        )
      )
    );
  }

  editGroup(group: Partial<IGroups>) {
    return this.http.put<IGroups>(`/api/groups/${group.id}`, {
      id: group.id,
      name: group.name,
      user_ids: group.user_ids,
      created_at: group.created_at,
      updated_at: new Date(Date.now()).toISOString(),
    });
  }

  // delete(id: number) {
  //   // https://github.com/typicode/json-server#routes
  //   return this.http.delete(`/api/users/${id}`);
  // }

  // editUser(
  //   user: Partial<
  //     IUsers & {
  //       firstName: string;
  //       lastName: string;
  //       primaryLanguage: string;
  //       secondaryLanguage: string;
  //     }
  //   >
  // ) {
  //   return this.http.put(`/api/users/${user.id}`, {
  //     email: user.email,
  //     password: user.password,
  //     first_name: user.firstName,
  //     last_name: user.lastName,
  //     company: user.company,
  //     language: {
  //       main: user.primaryLanguage,
  //       secondary: user.secondaryLanguage,
  //     },
  //     gender_id: Number(user.gender),
  //     created_at: user.created_at,
  //     updated_at: new Date(Date.now()).toISOString(),
  //   });
  // }

  // addUser(
  //   user: Partial<
  //     IUsers & {
  //       firstName: string;
  //       lastName: string;
  //       primaryLanguage: string;
  //       secondaryLanguage: string;
  //     }
  //   >
  // ) {
  //   return this.http.post('/api/users', {
  //     email: user.email,
  //     password: user.password,
  //     first_name: user.firstName,
  //     last_name: user.lastName,
  //     company: user.company,
  //     language: {
  //       main: user.primaryLanguage,
  //       secondary: user.secondaryLanguage,
  //     },
  //     gender_id: Number(user.gender),
  //     created_at: new Date(Date.now()).toISOString(),
  //     updated_at: new Date(Date.now()).toISOString(),
  //   });
  // }
}
