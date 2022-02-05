import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ContentComponent } from '../../../templates/content/content.component';
import { NavComponent } from '../../../templates/nav/nav.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent, NavComponent, ContentComponent],
  imports: [],
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
  exports: [NavComponent, ContentComponent],
})
export class SharedModule {}
