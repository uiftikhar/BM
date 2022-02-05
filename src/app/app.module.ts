import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from 'projects/home/src';

import { SharedModule } from '../../projects/shared/src/lib/shared.module';
// import { UsersModule } from 'projects/__users/src';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TODO remove this
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    // UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
