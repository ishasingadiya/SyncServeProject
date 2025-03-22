import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  // forgotPasswordForm = new FormGroup({
  //   email: new FormControl('')
  // });

  // message: string = '';
  // email: any;

  // constructor(private http: HttpClient) {}

  // forgotPassword() {
  //   this.http.post('http://localhost:8082/api/authenticate/forgot-password?email=' + this.forgotPasswordForm.value.email,
  //     null, // No body needed since we're using query parameters
  //     { responseType: 'text' }
  //   ).subscribe(response => {
  //     this.message = response;
  //   }, error => {
  //     this.message = "Error sending email.";
  //   });
  // }  
}  

