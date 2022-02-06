import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { IUsers } from 'projects/home/src';
import {
  take,
  tap,
} from 'rxjs/operators';

import { UsersService } from '../../users.service';

@Component({
  selector: 'lib-add-user',
  template: `
    <app-nav> </app-nav>
    <app-content>
      <h1>Add new user</h1>
      <form [formGroup]="addUserForm" (ngSubmit)="onSubmit()">
        <div class="input-wrapper mb-2">
          <div class="form-row">
            <div class="form-group col-5">
              <label>Email</label>
              <input
                type="text"
                formControlName="email"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.email.errors }"
              />
              <div *ngIf="submitted && f.email.errors" class="invalid-feedback">
                <div *ngIf="f.email.errors.required">Email is required</div>
                <div *ngIf="f.email.errors.email">
                  Email must be a valid email address
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>First Name</label>
              <input
                type="text"
                formControlName="firstName"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.firstName.errors }"
              />
              <div
                *ngIf="submitted && f.firstName.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.firstName.errors.required">
                  First Name is required
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>Last Name</label>
              <input
                type="text"
                formControlName="lastName"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.lastName.errors }"
              />
              <div
                *ngIf="submitted && f.lastName.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.lastName.errors.required">
                  Last Name is required
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>Password</label>
              <input
                type="text"
                formControlName="password"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.lastName.errors }"
              />
              <div
                *ngIf="submitted && f.lastName.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.lastName.errors.required">
                  Password is required
                </div>
              </div>
            </div>

            <div class="form-group col-5 mb-3">
              <label>Gender</label>
              <select
                formControlName="gender"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.gender.errors }"
              >
                <!-- Get values from Gender endpoint? -->
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Non-Binary</option>
              </select>
              <div
                *ngIf="submitted && f.gender.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.gender.errors.required">Gender is required</div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>Company</label>
              <input
                type="text"
                formControlName="company"
                class="form-control"
                [ngClass]="{ 'is-invalid': submitted && f.company.errors }"
              />
              <div
                *ngIf="submitted && f.company.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.company.errors.required">Company is required</div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>Primary language</label>
              <input
                type="text"
                formControlName="primaryLanguage"
                class="form-control"
                [ngClass]="{
                  'is-invalid': submitted && f.primaryLanguage.errors
                }"
              />
              <div
                *ngIf="submitted && f.primaryLanguage.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.primaryLanguage.errors.required">
                  Primary language is required
                </div>
              </div>
            </div>
            <div class="form-group col-5">
              <label>Secondary language</label>
              <input
                type="text"
                formControlName="secondaryLanguage"
                class="form-control"
                [ngClass]="{
                  'is-invalid': submitted && f.secondaryLanguage.errors
                }"
              />
              <div
                *ngIf="submitted && f.secondaryLanguage.errors"
                class="invalid-feedback"
              >
                <div *ngIf="f.secondaryLanguage.errors.required">
                  Secondary language is required
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button [disabled]="!addUserForm.valid" class="btn btn-primary mr-1">
          Register
        </button>
        <button [routerLink]="'/users'" class="btn btn-secondary">
          cancel
        </button>
      </form>
    </app-content>
  `,
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UsersService,
    private readonly router: Router
  ) {}
  addUserForm: FormGroup;
  submitted = false;
  // convenience getter for easy access to form fields
  get f() {
    return this.addUserForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addUserForm.invalid) {
      return;
    }

    const formValues = this.addUserForm.value as Partial<IUsers>;
    this.userService
      .addUser(formValues)
      .pipe(
        tap(() => {
          this.router.navigate(['/users']);
        }),
        take(1)
      )
      .subscribe();
  }
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      gender: [1],
      company: [''],
      primaryLanguage: ['', Validators.required],
      secondaryLanguage: [''],
    });
  }
}
