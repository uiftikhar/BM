import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
