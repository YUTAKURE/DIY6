import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userName: string = '';
  password: string = '';

  onSubmit() {
    if (this.userName && this.password) {
      localStorage.setItem('userName', this.userName);
      localStorage.setItem('password', this.password);

      alert('Your user name and password have been saved.');
    } else {
      alert('Please fill in all the fields');
    }
  }
}
