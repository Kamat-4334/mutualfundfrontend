import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   constructor(private loginservice: LoginService,private router:Router){ }
//   logout(){
//   this.loginservice.logout()
//   }
//   isLoggedIn(){
//     return this.loginservice.isLoggedIn()
//     }

//     goTologin(){
//       this.router.navigate(['login'])
//     }

// }
// import { Component } from '@angular/core';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private loginservice: LoginService, private router: Router) {}
  ngOnInit() {
    console.log('loggedin', this.isLoggedIn());
    if (!this.isLoggedIn()) {
      document.getElementById('login')?.style.setProperty('display', 'block');
    } else {
      document.getElementById('login')?.style.setProperty('display', 'none');
    }
  }
  logout() {
    this.loginservice.logout();
  }
  isLoggedIn() {
    return this.loginservice.isLoggedIn();
  }
  goTologin() {
    this.router.navigate(['login']);
  }
  goTosignUp(){
    this.router.navigate(['register'])
  }

  getCurrentUser() {
    return this.loginservice.getLoggedInUser();
  }
}
