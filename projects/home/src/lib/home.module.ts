import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { HttpClientModule } from '@angular/common/http';

import { ContentComponent } from './../../../templates/content/content.component';
import { NavComponent } from './../../../templates/nav/nav.component';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, ContentComponent, NavComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [HomeService],
  exports: [HomeComponent],
})
export class HomeModule {}
