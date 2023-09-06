import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/loginResponse.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router){}


  loginUser(loginForm:NgForm){

    const user = new User(
      loginForm.value.username,
      loginForm.value.password,'',''
    );

   
    console.log(loginForm)
    this.http.post<LoginResponse>('http://localhost:8080/login', user)
    .subscribe(
      response => {
        // Handle success response
        console.log(response);

        if (response.isValid) {
          if (response.isAdmin) {
          
            this.router.navigate(['/adminhome'], { queryParams: { username: loginForm.value.username } });
          } else {
          
            this.router.navigate(['/userhome'], { queryParams: { username: loginForm.value.username } });
          }
        } else {
          alert('Invalid User')
          console.log('Invalid user');
        }
      },
      error => {
        // Handle error response
        alert('Invalid User')
        console.error(error);
      }
    );

  }

}
