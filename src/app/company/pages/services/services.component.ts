import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  serviceRequests: any[] = [];
  constructor(
    private companyService: CompanyService,
    private notification: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.loadServiceRequests();
  }
  loadServiceRequests() {
    this.companyService.getServiceRequests().subscribe({
      next: (data) => {
        this.serviceRequests = data;
        console.log('Service Requests:', this.serviceRequests);
      },
      error: (error) => {
        console.error('Error fetching service requests:', error);
      }
    });
  }
  respondToServiceRequest(requestId: number, response: string) {
    this.companyService.respondToServiceRequest(requestId, response).subscribe({
      next: () => {
        this.notification.success('Success', `Response updated: ${response}`);
        this.loadServiceRequests(); 
      },
      error: (error) => {
        console.error('Error updating response:', error);
        this.notification.error('Error', 'Failed to update response.');
      }
    });
  }  
}
