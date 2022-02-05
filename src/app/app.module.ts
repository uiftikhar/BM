import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from 'projects/home/src';

// import { UsersModule } from 'projects/__users/src';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

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
