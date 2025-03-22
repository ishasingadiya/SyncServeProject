import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service'; // Ensure the correct import of the client service
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-service-request-form',
  templateUrl: './service-request-form.component.html',
  styleUrls: ['./service-request-form.component.scss']
})
export class ServiceRequestFormComponent implements OnInit {
  serviceRequestForm!: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private notification: NzNotificationService,
    private router: Router,
    private clientService: ClientService
  ) { }
  ngOnInit(): void {
    this.serviceRequestForm = this.fb.group({
      requestInfo: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      name: [null, [Validators.required]],
      address1: [null, [Validators.required]],
      address2: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }
  onSubmit(): void {
    if (this.serviceRequestForm.valid) {
      this.isLoading = true;
      const serviceRequest = this.serviceRequestForm.value;
      this.clientService.createServiceRequest(serviceRequest).subscribe({
        next: (response) => { 
          if (response && typeof response === 'string') {
            console.log('Plain text response:', response);
          } else {
            console.log('JSON response:', response);
          }
          this.isLoading = false;
          this.notification.success('SUCCESS', 'Service request submitted successfully.', { nzDuration: 5000 });
          this.router.navigateByUrl('/client/dashboard');
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          console.error('Error submitting service request:', error);
          this.notification.error('ERROR', 'Error submitting service request. Please try again.', { nzDuration: 5000 });
        }
      });
    } else {
      this.serviceRequestForm.markAllAsTouched();
      this.notification.error('ERROR', 'Please fill in all required fields correctly.', { nzDuration: 5000 });
    }
  }  
  disablePastDates = (current: Date): boolean => {
    return current < new Date(); 
  };
}
