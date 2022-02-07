import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { IGroups } from '../../../home/src/lib/home.service';
import { GroupsService } from './services/groups.service';

@Component({
  selector: 'lib-groups',
  template: `
    <app-nav></app-nav>
    <app-content>
      <div class="container">
        <div class="row">
          <div class="col">
            <h6>groups</h6>
            <ul class="list-group">
              <ng-container *ngFor="let group of groups$ | async">
                <li
                  class="list-group-item pointer"
                  [routerLink]="'/groups/edit'"
                  [queryParams]="{ id: group.id }"
                >
                  <div>
                    <h3>{{ group.name }}</h3>
                  </div>
                </li>
              </ng-container>
            </ul>
          </div>
        </div>
      </div>
    </app-content>
  `,
  styles: [],
})
export class GroupsComponent implements OnInit {
  constructor(private readonly groupsService: GroupsService) {}
  groups$: Observable<IGroups[]>;

  ngOnInit(): void {
    this.groups$ = this.groupsService.get();
  }
}
