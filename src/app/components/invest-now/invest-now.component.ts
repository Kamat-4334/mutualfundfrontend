import { Component } from '@angular/core';

import { MutualFundService } from 'src/app/services/mutual-fund.service';

import { ApiService } from 'src/app/services/api.service';

import { Router } from '@angular/router';

import { AnimationOptions } from 'ngx-lottie';

import { AnimationItem } from 'lottie-web';

import { AllfundService } from 'src/app/services/allfund.service';
import { ElementRef } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-invest-now',
  templateUrl: './invest-now.component.html',
  styleUrls: ['./invest-now.component.css'],
})
export class InvestNowComponent {
  constructor(private api: ApiService,
    private router: Router,
    private fund: AllfundService,
    private elementref: ElementRef,
     private allfunds: AllfundService,
    ) {}
  mutualFunds: any;
  flag: any;

  error: any;

  detailList: any[] = [];

  allBottomDetail: any[] = [];

  data: any;
  showAllfund: boolean = false;

  portfolio: any = [];

  userId: number | any;

  // getCurrentUser() {
  //   return this.loginservice.getLoggedInUser();
  // }
  ngOnInit() {


    this.api.getTopDetail().subscribe((res) => {
      this.detailList = res;

      console.log(this.detailList);

      this.loadMutualFunds();
    });

    this.api.getBottomDetail().subscribe((res) => {
      this.allBottomDetail = res;
    });


  }





  loadMutualFunds() {
    this.fund
      .getMutualFunds()

      .subscribe((data: any[]) => {
        this.mutualFunds = data;
      });
  }

  scrollElemet() {
    const element = this.elementref.nativeElement.querySelector('#fundsection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
goToSip(){
  this.router.navigate(['/sip'])
}


}
