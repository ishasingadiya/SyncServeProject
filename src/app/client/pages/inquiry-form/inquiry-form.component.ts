import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss']
})
export class InquiryFormComponent implements OnInit {
  inquiryForm!: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      inquiryType: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }
  onSubmit(): void {
    if (this.inquiryForm.valid) {
      this.isLoading = true;
      const inquiryData = this.inquiryForm.value;
      inquiryData.userId = Number(localStorage.getItem('userId')); // Ensure it's a number
      this.clientService.submitInquiry(inquiryData).subscribe({
        next: () => {
          this.isLoading = false;
          this.notification.success('SUCCESS', 'Inquiry submitted successfully.', { nzDuration: 5000 });
          this.router.navigateByUrl('/client/dashboard');
        },
        error: (error) => {
          this.isLoading = false;
          this.notification.error('ERROR', 'Failed to submit inquiry.', { nzDuration: 5000 });
          console.error('Error:', error);
        }
      });
    } else {
      this.inquiryForm.markAllAsTouched();
      this.notification.error('ERROR', 'Please fill in all required fields correctly.', { nzDuration: 5000 });
    }
  }
}
