import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  addingForm: any = {
    name: '',
    username: '',
    email: ''
  }

  constructor(private usersList: UsersListComponent) {}
 
  onSubmit(form: NgForm) {
    this.usersList.addUsers(form.value);
  }

}
