import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient, private router: Router){}




  registerUser(registerForm:NgForm){


    // const formData = {
    //   email: registerForm.value.email,
    //   password: registerForm.value.password,
    //   address: registerForm.value.address,
    //   phone: registerForm.value.phone
    // };

    const user = new User(
      registerForm.value.username,
      registerForm.value.password,
      registerForm.value.address,
      registerForm.value.phone
    );

    

    console.log(registerForm)
 
    this.http.post('http://localhost:8080/register', user)
    .subscribe(
      response => {
        // Handle success response
        console.log(response);
        this.router.navigate(['/home'], { queryParams: { message: 'User successfully registered!' } });
      },
      error => {
        // Handle error response
        console.error(error);
      }
    );

  }
}
