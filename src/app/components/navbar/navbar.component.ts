import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 650) {
        document
          .getElementById('toggleBtn')
          ?.style.setProperty('display', 'visible');
      } else {
        document
          .getElementById('toggleBtn')
          ?.style.setProperty('display', 'none');
      }
    });

    console.log('loggedin', this.isLoggedIn());

    if (!this.isLoggedIn()) {
      document.getElementById('login')?.style.setProperty('display', 'block');
    } else {
      document.getElementById('login')?.style.setProperty('display', 'none');
    }
  }

  logout() {
    Swal.fire({
      title: 'Confirm Logout',

      text: 'Are you sure you want to logout?',

      icon: 'question',

      showCancelButton: true,

      showConfirmButton: true,

      confirmButtonColor: '#008080',

      cancelButtonColor: '#d33',

      confirmButtonText: 'Yes, Logout!',
    }).then((result) => {
      if (result.value) {
        this.loginservice.logout();
      }
    });
  }

  isLoggedIn() {
    return this.loginservice.isLoggedIn();
  }

  goTologin() {
    this.router.navigate(['login']);
  }

  goTosignUp() {
    this.router.navigate(['register']);
  }

  getCurrentUser() {
    return this.loginservice.getLoggedInUser();
  }
}
