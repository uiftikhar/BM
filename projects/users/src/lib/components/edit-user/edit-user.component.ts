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
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { IUsers } from 'projects/home/src';
import { tap } from 'rxjs/internal/operators/tap';
import { take } from 'rxjs/operators';

import { UsersService } from '../../users.service';

@Component({
  selector: 'lib-edit-user',
  template: `
    <app-nav> </app-nav>
    <app-content>
      <h1>Edit user: {{ user.first_name }} {{ user.last_name }}</h1>
      <form [formGroup]="editUserForm" (ngSubmit)="onSubmit()">
        <div class="input-wrapper">
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
        <div class="text-center">
          <button [disabled]="!editUserForm.valid" class="btn btn-primary mr-1">
            Update
          </button>
        </div>
      </form>
    </app-content>
  `,
  styleUrls: ['./edit-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private readonly userService: UsersService
  ) {}
  editUserForm: FormGroup;
  submitted = false;
  user: IUsers;
  // convenience getter for easy access to form fields
  get f() {
    return this.editUserForm.controls;
  }

  onSubmit() {
    // TODO Error handling
    this.submitted = true;
    console.log(this.user);
    const formValues = {
      ...this.editUserForm.value,
      id: this.user.id,
      created_at: this.user.created_at,
    } as IUsers;
    this.userService
      .editUser(formValues)
      .pipe(
        tap(() => {
          this.router.navigate(['/users']);
        }),
        take(1)
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'] as IUsers;
    this.editUserForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      firstName: [this.user.first_name, Validators.required],
      lastName: [this.user.last_name, Validators.required],
      gender: [this.user.gender_id],
      company: [this.user.company],
      primaryLanguage: [this.user.language.main, Validators.required],
      secondaryLanguage: [this.user.language.secondary],
    });
  }
}
