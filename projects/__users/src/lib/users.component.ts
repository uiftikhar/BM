import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-users',
  template: `
    <!-- <app-nav></app-nav>
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
    </app-content> -->
  `,
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
