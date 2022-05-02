
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from '../auth.service';
import { Token } from '../token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: boolean;
  token?: Token | Error;
  loginForm: FormGroup;
  loginFailed: boolean;

  constructor(
    public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder)
  {
    this.loginFailed = false;
    this.message = false;
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }



  login() {
    // Resets login status each time
   

    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
     
    this.authService.login(username, password)
      .subscribe(
        (result) => {
          this.token = result as Token

          // if token available set to session and redirect to
          // add-appointment component
          if (this.token) {
            this.authService.isLoggedIn = true;
            sessionStorage.setItem('token', this.token.token);
            sessionStorage.setItem('isLoggedIn', "true");
            
            const redirectUrl = '/add-appointment';
            const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            this.router.navigate([redirectUrl], navigationExtras);
          } 
        },
        (error) => {
          this.loginFailed = true;
          catchError(error);
        }

      );

    
  }



  logout() {
    this.authService.logout();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isLoggedIn');
    
    const redirectUrl = '';
    this.router.navigate(['/login']);
   
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
