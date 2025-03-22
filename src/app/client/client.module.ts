import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdDetailComponent } from './pages/ad-detail/ad-detail.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ReviewComponent } from './pages/review/review.component';
import { InquiryFormComponent } from './pages/inquiry-form/inquiry-form.component';
import { ServiceRequestFormComponent } from './pages/service-request-form/service-request-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClientComponent,
    ClientDashboardComponent,
    AdDetailComponent,
    MyBookingsComponent,
    ReviewComponent,
    InquiryFormComponent,
    ServiceRequestFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ServiceRequestFormComponent]
})
export class ClientModule { }
