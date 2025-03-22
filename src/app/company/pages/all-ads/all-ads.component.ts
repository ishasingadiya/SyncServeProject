import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.scss'] // Corrected property name
})
export class AllAdsComponent implements OnInit {

  ads: any;

  constructor(private companyService: CompanyService,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    this.getAllAdsByUserId();
  }

  getAllAdsByUserId(): void {
    this.companyService.getAllAdsByUserId().subscribe(
      res => {
        this.ads = res;
      },
      error => {
        console.error('Error fetching ads:', error);
      }
    );
  }

  updateImg(img: string): string {
    return 'data:image/jpeg;base64,' + img;
  }

  deletedAd(adId:any){
    this.companyService.deletedAd(adId).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        'Ad Deleted Successfully',
        {nzDuration: 5000}
      );
      this.getAllAdsByUserId();
    })
  }
}
