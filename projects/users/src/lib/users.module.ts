import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'projects/shared/src/public-api';

import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users.component';
import { UserResolver } from './resolver/user.resolver';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent, AddUserComponent, EditUserComponent],
  imports: [
    UsersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [UsersComponent, AddUserComponent, EditUserComponent],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
