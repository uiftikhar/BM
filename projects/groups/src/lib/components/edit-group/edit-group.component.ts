import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  take,
  tap,
} from 'rxjs/operators';

import {
  IGroups,
  IUsers,
} from '../../../../../home/src/lib/home.service';
import { GroupsService } from '../../services/groups.service';

export type GroupsViewModel = IGroups & {
  users: {
    id: number;
    name: string;
  }[];
};

@Component({
  selector: 'lib-edit-group',
  template: `
    <app-nav> </app-nav>
    <app-content>
      <h1>Edit group: {{ group.name }}</h1>
      <form [formGroup]="groupsForm" (ngSubmit)="onSubmit()">
        <div class="input-wrapper mb-2 d-flex w-75 justify-content-between">
          <div class="form-row">
            <div class="form-group">
              <label>Group Name</label>
              <input
                type="text"
                formControlName="name"
                class="form-control w-100"
                [ngClass]="{
                  'is-invalid': submitted && f.name.errors
                }"
              />
              <div *ngIf="submitted && f.name.errors" class="invalid-feedback">
                <div *ngIf="f.name.errors.required">name is required</div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="element">
              <label class="field-label">Users</label>
              <div class="flex">
                <div
                  *ngFor="
                    let user of groupsForm.controls.users['controls'];
                    let i = index
                  "
                  class="flex  align-center multi-checkbox"
                >
                  <input
                    type="checkbox"
                    [formControl]="user"
                    (change)="getSelectedUsers()"
                  />
                  {{ users[i].first_name }} {{ users[i].last_name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          [disabled]="!groupsForm.valid || selectedUsers.length === 0"
          class="btn btn-primary mr-1"
        >
          Update
        </button>
        <button [routerLink]="'/groups'" class="btn btn-secondary">
          cancel
        </button>
      </form>
    </app-content>
  `,
  styleUrls: ['./edit-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditGroupComponent implements OnInit {
  group: GroupsViewModel;
  groupsForm: FormGroup;
  submitted = false;

  selectedUsers: {
    id: number;
    name: string;
  }[];

  users: (IUsers & { selected: boolean; name: string })[];
  constructor(
    private readonly groupsService: GroupsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  get f() {
    return this.groupsForm.controls;
  }

  ngOnInit(): void {
    this.group = this.route.snapshot.data['group'] as GroupsViewModel;
    this.users = this.route.snapshot.data['users'];
    this.selectedUsers = this.group.users;
    this.createFormInputs();
  }

  createFormInputs() {
    this.groupsForm = new FormGroup({
      users: this.createUsers(this.users),
      name: new FormControl(this.group.name, [Validators.required]),
    });
  }

  createUsers(selectedUsers) {
    const arr = selectedUsers.map((user) => {
      return new FormControl(this.group.user_ids.includes(user.id) || false);
    });
    return new FormArray(arr);
  }

  getSelectedUsers() {
    this.selectedUsers = (
      this.groupsForm.controls.users['controls'] as FormControl[]
    )
      .map((formControl, i) => {
        return formControl.value && this.users[i];
      })
      .filter((val) => !!val);
  }

  onSubmit() {
    this.submitted = true;
    const formValues = {
      ...this.group,
      user_ids: this.selectedUsers.map((user) => user.id),
    } as IGroups;
    this.groupsService
      .editGroup(formValues)
      .pipe(
        tap((res) => {
          this.router.navigate(['/groups']);
        }),
        take(1)
      )
      .subscribe();
  }
}
