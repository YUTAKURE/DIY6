import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret',
  template: '<router-outlet></router-outlet>',
})
export class SecretComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');

    if (userName && password) {
      this.router.navigate(['secret/child-a']);
    } else {
      this.router.navigate(['secret/child-b']);
    }
  }
}
