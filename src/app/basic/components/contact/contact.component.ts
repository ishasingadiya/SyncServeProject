import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.authService.submitContactForm(this.contactForm.value).subscribe(
        (response) => {
          console.log("Response received:", response); 
          if (response && response.message) {
            this.message = response.message; 
            this.contactForm.reset();
          } else {
            this.message = 'Unexpected response. Please try again.';
          }
        },
        (error) => {
          console.error('Error:', error);
          this.message = 'Error submitting form. Please try again.';
        } 
      );
    }
  }  
}
