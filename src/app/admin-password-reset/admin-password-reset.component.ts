import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-password-reset',
  templateUrl: './admin-password-reset.component.html',
  styleUrls: ['./admin-password-reset.component.css']
})
export class AdminPasswordResetComponent {

  constructor(private http:HttpClient, private router:Router){}

  adminPasswordReset(adminResetForm:NgForm){

    // username:String=adminResetForm.value.username
    // password:String=adminResetForm.value.password
    // newPassword:String=adminResetForm.value.newPassword

   const formdata =new FormData();

   formdata.append('username',adminResetForm.value.username)
   formdata.append('password',adminResetForm.value.password)
   formdata.append('newPassword',adminResetForm.value.newPassword)

   this.http.post('http://localhost:8080/adminUpdate', formdata).subscribe(
    (Response:any)=>{
      
      alert(Response.message)
      this.router.navigate(['/login'])
    },
    (Error)=>{
      alert('Invalid Details')
      console.log(Error)

    }
   );



  }


}
