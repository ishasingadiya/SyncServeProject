import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false; 

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router // Inject Router for redirection
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;

    this.authService.submitContactForm(this.contactForm.value)
      .pipe(
        catchError((error) => {
          console.error('Submission error:', error);
          this.notification.error(
            'ERROR',
            'Failed to send your message. Please try again.',
            { nzDuration: 5000 }
          );
          this.isSubmitting = false;
          return throwError(error);
        })
      )
      .subscribe((response) => {
        console.log("Response received:", response);

        if (response?.message) {
          this.notification.success(
            'SUCCESS',
            'Your message has been sent successfully!',
            { nzDuration: 5000 }
          );
          this.contactForm.reset();

          // Redirect to the home page after a short delay
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 2000);
        } else {
          this.notification.warning(
            'WARNING',
            'Unexpected response. Please try again.',
            { nzDuration: 5000 }
          );
        }

        this.isSubmitting = false;
      });
  }  
}
