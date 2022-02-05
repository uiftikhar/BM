import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersComponent],
})
export class UsersModule {}
