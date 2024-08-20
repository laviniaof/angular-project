import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { DYNAMIC_TYPE } from '@angular/compiler';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
