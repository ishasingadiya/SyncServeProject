import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';
import { RouterModule } from '@angular/router';
import { AllAdsComponent } from './company/pages/all-ads/all-ads.component';
import { HomeComponent } from './basic/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ContactComponent } from './basic/components/contact/contact.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ChatbotComponent } from './basic/components/chatbot/chatbot.component';
import { AboutComponent } from './basic/components/about/about.component';
import { ForgetPasswordComponent } from './basic/components/forget-password/forget-password.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
registerLocaleData(en);
CUSTOM_ELEMENTS_SCHEMA
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SignupClientComponent,
    SignupCompanyComponent,
    AllAdsComponent,
    HomeComponent,
    ContactComponent,
    ChatbotComponent,
    AboutComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DemoNgZorroAntdModule,
    NzTabsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule,
    NzMenuModule,
    NzIconModule,
    NzTypographyModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US},
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
