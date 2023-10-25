import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.api.login(this.user).subscribe(
      (res) => {
        this.router.navigate(['/timesheet-entry']);
      },
      (error) => {
        console.log('Login failed:', error);
      }
    );
  }
}
