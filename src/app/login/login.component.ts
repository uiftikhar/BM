import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import { take } from 'rxjs/operators';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private readonly loginService: LoginService) {}
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.loginService
      .authenticate(
        this.form.get('username').value,
        this.form.get('password').value
      )
      .pipe(take(1))
      .subscribe();
  }
}
