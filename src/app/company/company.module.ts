import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAdComponent } from './pages/update-ad/update-ad.component';
import { ServicesComponent } from './pages/services/services.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyDashboardComponent,
    CreateAdComponent,
    UpdateAdComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzTableModule
  ]
})
export class CompanyModule { }
