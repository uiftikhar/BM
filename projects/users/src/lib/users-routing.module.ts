import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users.component';
import { UserResolver } from './resolver/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'edit',
    component: EditUserComponent,
    resolve: { user: UserResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
