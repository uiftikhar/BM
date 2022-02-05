import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

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
    console.log(
      this.form.get('username').value,
      this.form.get('password').value
    );
    this.loginService
      .authenticate(
        this.form.get('username').value,
        this.form.get('password').value
      )
      .subscribe();
  }
}
