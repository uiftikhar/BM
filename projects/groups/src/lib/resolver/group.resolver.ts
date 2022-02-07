import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

import { Observable } from 'rxjs';

import { GroupsService } from '../services/groups.service';

@Injectable()
export class GroupResolver implements Resolve<Observable<any>> {
  constructor(private readonly groupsService: GroupsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.groupsService.getById(route.queryParams.id);
  }
}
