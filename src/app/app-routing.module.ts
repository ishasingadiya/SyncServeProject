import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { HomeComponent } from './basic/components/home/home.component';
import { ContactComponent } from './basic/components/contact/contact.component';
import { EmailService } from './basic/services/email/email.service';
import { AboutComponent } from './basic/components/about/about.component';
const routes: Routes = [
  { path: 'register_client', component: SignupClientComponent },
  { path: 'register_company', component: SignupCompanyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: SignupComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'email' , component: EmailService},
  { path: 'about' , component: AboutComponent},
  // { path: 'forgot-password', component: ForgetPasswordComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
