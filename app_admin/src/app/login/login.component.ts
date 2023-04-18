import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
//import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { Router } from '@angular/router'; 
import { AuthenticationService } from '../services/authentication.service'; 
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {

  //loginForm: FormGroup;
  submitted = false;
  public formError: string = ''; 

  public credentials = { 
    name: '', 
    email: '', 
    password: '' 
  };

  constructor(
    //private formBuilder: FormBuilder, 
    private router: Router, 
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit () {}

  // Check to make sure the email and password fields include user input
  public onLoginSubmit(): void { 
    this.formError = ''; 
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again'; 
    } else { 
      this.doLogin(); 
    } 
  }

  // Delegates the login call to the authentication service
  private doLogin(): void { 
      this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl('#'))  // Navigates to the home page
      .catch((message) => this.formError = message); 
  }
}
