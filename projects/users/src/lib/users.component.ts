import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-users',
  template: `
    <app-nav></app-nav>
    <h1>Shit works</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
