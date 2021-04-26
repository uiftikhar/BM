import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IUsers {
  email: string;
  password: string;
  id: number;
  first_name: string;
  last_name: string;
  gender_id: number;
  company: string;
  language: {
    main: string;
    secondary: string | null;
  };
  createdAt: string;
  updatedAt: string;
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
    return this.http.get<IUsers[]>('/api/users');
  }

  getGroups() {
    return this.http.get<IGroups[]>('/api/groups');
  }

  getProjects() {
    return this.http.get<IProjects[]>('/api/projects');
  }

  constructor(private http: HttpClient) {}
}
