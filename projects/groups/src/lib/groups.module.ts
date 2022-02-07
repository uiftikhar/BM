import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'projects/shared/src/public-api';

import { UsersService } from '../../../users/src/lib/users.service';
import {
  EditGroupComponent,
} from './components/edit-group/edit-group.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupResolver } from './resolver/group.resolver';
import { UsersResolver } from './resolver/users.resolver';
import { GroupsService } from './services/groups.service';

@NgModule({
  declarations: [GroupsComponent, EditGroupComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [GroupsService, GroupResolver, UsersService, UsersResolver],
  exports: [GroupsComponent, EditGroupComponent],
})
export class GroupsModule {}
