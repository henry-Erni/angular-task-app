import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
const selectedUser = DUMMY_USERS[randomUserIndex];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = signal(selectedUser);

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onUserSelect(event: MouseEvent) {
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user.set(DUMMY_USERS[randomUserIndex]);
  }
}
