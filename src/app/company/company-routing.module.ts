import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { AllAdsComponent } from './pages/all-ads/all-ads.component';
import { UpdateAdComponent } from './pages/update-ad/update-ad.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'dashboard', component: CompanyDashboardComponent },
  { path: 'ad', component: CreateAdComponent },
  { path: 'ads', component: AllAdsComponent },
  { path: 'update/:id', component: UpdateAdComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
