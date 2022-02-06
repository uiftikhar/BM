import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUsers } from 'projects/home/src';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { IGenders } from '../../../home/src/lib/home.service';

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpClient) {}
  get() {
    return this.http.get<IGenders[]>('/api/genders').pipe(
      switchMap((genders) =>
        this.http.get<IUsers[]>('/api/users').pipe(
          map((users: IUsers[]) => {
            return users
              .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
              .map((user: IUsers) => {
                user.gender = genders
                  .find((gender) => gender.id === user.gender_id)
                  .name.toLowerCase();
                return user;
              });
          })
        )
      )
    );
  }

  getById(id: string) {
    return this.http.get<IUsers>(`/api/users/${id}`);
  }

  delete(id: number) {
    // https://github.com/typicode/json-server#routes
    return this.http.delete(`/api/users/${id}`);
  }

  editUser(
    user: Partial<
      IUsers & {
        firstName: string;
        lastName: string;
        primaryLanguage: string;
        secondaryLanguage: string;
      }
    >
  ) {
    return this.http.put(`/api/users/${user.id}`, {
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
      company: user.company,
      language: {
        main: user.primaryLanguage,
        secondary: user.secondaryLanguage,
      },
      gender_id: Number(user.gender),
      created_at: user.created_at,
      updated_at: new Date(Date.now()).toISOString(),
    });
  }

  addUser(
    user: Partial<
      IUsers & {
        firstName: string;
        lastName: string;
        primaryLanguage: string;
        secondaryLanguage: string;
      }
    >
  ) {
    return this.http.post('/api/users', {
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
      company: user.company,
      language: {
        main: user.primaryLanguage,
        secondary: user.secondaryLanguage,
      },
      gender_id: Number(user.gender),
      created_at: new Date(Date.now()).toISOString(),
      updated_at: new Date(Date.now()).toISOString(),
    });
  }
}
