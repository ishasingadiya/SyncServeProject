import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserStorageService } from '../../../basic/services/storage/user-storage.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss']
})
export class AdDetailComponent implements OnInit {

  adId: any;
  avatarUrl:any;
  ad:any;
  reviews:any;
  validateForm!: FormGroup;
  averageRating: number = 0;
 
  constructor(
    private clientService: ClientService,
    private activatedroute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.validateForm= this.fb.group({
      bookDate: [null, [Validators.required]]
    })
    this.adId = this.activatedroute.snapshot.params['adId'];  // Initialize adId here
    this.getAdDetailsByAdId();
  }

  getAdDetailsByAdId() {
    this.clientService.getAdDetailsByAdId(this.adId).subscribe(res => {
      console.log(res);
      this.avatarUrl='data:image/jpeg;base64,' + res.adDTO.returnedImg;
      this.ad=res.adDTO;
      this.reviews = res.reviewDTOList;

      if (this.reviews && this.reviews.length > 0) {
        let total = this.reviews.reduce((sum: number, review: any) => sum + review.rating, 0);
        this.averageRating = total / this.reviews.length;
      } else {
        this.averageRating = 0;
      }
    });
  }

  bookService(){
    const bookServiceDTO = {
      bookDate: this.validateForm.get(['bookDate']).value,
      adId : this.adId,
      userId: UserStorageService.getUserId()
    }
    
    this.clientService.bookService(bookServiceDTO).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        'Request posted successfully',
        {nzDuration: 5000}
      );
      this.router.navigateByUrl('/client/bookings');
    })
  }

  public disabledDate = (current: Date): boolean => {
    return current && current.getTime() < new Date().setHours(0, 0, 0, 0);
  };  
}
