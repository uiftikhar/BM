import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

export interface IGenders {
  id: number;
  name: string;
}

export interface IUsers {
  email: string;
  password: string;
  id: number;
  first_name: string;
  last_name: string;
  gender_id: number;
  gender: string;
  company: string;
  language: {
    main: string;
    secondary: string | null;
  };
  created_at: string;
  updated_at: string;
}

export interface IGroups {
  id: number;
  name: string;
  user_ids: number[];
  created_at: string;
  updated_at: string;
}

export interface IProjects {
  id: number;
  name: string;
  group_ids: number[];
  user_ids: number[];
  created_at: string;
  updated_at: string;
}

@Injectable()
export class HomeService {
  getUsers() {
    return this.http
      .get<IUsers[]>('/api/users')
      .pipe(
        map((users) =>
          users
            .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
            .filter((_, index) => index < 5)
        )
      );
  }

  getGroups() {
    return this.http
      .get<IGroups[]>('/api/groups')
      .pipe(
        map((users) =>
          users
            .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
            .filter((_, index) => index < 5)
        )
      );
  }

  getProjects() {
    return this.http
      .get<IProjects[]>('/api/projects')
      .pipe(
        map((users) =>
          users
            .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
            .filter((_, index) => index < 5)
        )
      );
  }

  constructor(private http: HttpClient) {}
}
