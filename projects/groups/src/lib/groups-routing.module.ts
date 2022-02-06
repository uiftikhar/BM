import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  EditGroupComponent,
} from './components/edit-group/edit-group.component';
import { GroupsComponent } from './groups.component';
import { GroupResolver } from './resolver/group.resolver';
import { UsersResolver } from './resolver/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
  },
  // {
  //   path: 'add',
  //   component: AddUserComponent,
  // },
  {
    path: 'edit',
    component: EditGroupComponent,
    resolve: { group: GroupResolver, users: UsersResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
