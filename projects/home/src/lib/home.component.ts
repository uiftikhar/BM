import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService, IGroups, IProjects, IUsers } from './home.service';

@Component({
  selector: 'lib-home',
  template: `
    <app-nav></app-nav>
    <app-content>
      <div class="container">
        <div class="row">
          <div class="col">
            <h6>Last 5 Users</h6>
            <ul class="list-group">
              <li class="list-group-item" *ngFor="let user of users$ | async">
                {{ user.first_name }} {{ user.last_name }}
              </li>
            </ul>
          </div>
          <div class="col">
            <h6>Last 5 Groups</h6>
            <ul class="list-group">
              <li class="list-group-item" *ngFor="let group of groups$ | async">
                {{ group.name }}
              </li>
            </ul>
          </div>
          <div class="col">
            <h6>Last 5 Projects</h6>
            <ul class="list-group">
              <li
                class="list-group-item"
                *ngFor="let project of projects$ | async"
              >
                {{ project.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </app-content>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  public users$: Observable<IUsers[]>;
  public groups$: Observable<IGroups[]>;
  public projects$: Observable<IProjects[]>;
  ngOnInit(): void {
    this.users$ = this.homeService.getUsers();
    this.groups$ = this.homeService.getGroups();
    this.projects$ = this.homeService.getProjects();
  }
  constructor(private readonly homeService: HomeService) {}
}
