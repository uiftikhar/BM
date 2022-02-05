import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../../src/app/shared/shared.module';
import { ContentComponent } from '../../../templates/content/content.component';
import { NavComponent } from '../../../templates/nav/nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent, ContentComponent, NavComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, HttpClientModule],
  providers: [HomeService],
  exports: [HomeComponent],
})
export class HomeModule {}
