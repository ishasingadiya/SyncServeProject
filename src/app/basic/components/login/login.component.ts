import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loading = false; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    this.authService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value)
    .subscribe(res =>{
      console.log(res);
      if(UserStorageService.isClientLoggedIn()){
        this.router.navigateByUrl('client/dashboard')
      }else if(UserStorageService.isCompanyLoggedIn()){
        this.router.navigateByUrl('company/dashboard')
      }
    }, error =>{
      this.notification
      .error(
        'ERROR',
        'Bad credentials',
        {nzDuration:5000}
      )
    })
    }
  }
