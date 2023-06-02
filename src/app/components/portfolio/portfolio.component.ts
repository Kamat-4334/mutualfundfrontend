import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { WalletService } from 'src/app/services/wallet.service';
import { AllfundService } from 'src/app/services/allfund.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  portfolio: any = [];

  userId: number | any;
  id: string | any = '';
  fundDetails: any;

  options: AnimationOptions = {
    path: '../../../assets/142582-money-growth.json',
  };

  constructor(
    private apiService: ApiService,
    private loginservice: LoginService,
    private walletservice: WalletService,
    private allfunds: AllfundService,
    private http: HttpClient
  ) {}

  getCurrentUser() {
    return this.loginservice.getLoggedInUser();
  }

  ngOnInit() {
    this.walletservice
      .finduserid(this.getCurrentUser())
      .subscribe((response: any) => {
        console.log(response);

        this.userId = response;

        console.log(this.userId);

        this.apiService.getPortfolio(this.userId).subscribe((res: any) => {
          console.log(res);

          this.portfolio = res;

          let allfundData: any | [];

          this.allfunds.getMutualFunds().subscribe((res) => {
            console.log(res);

            allfundData = res;

            this.portfolio = this.portfolio.map((data: any) => {
              let index = allfundData.findIndex(
                (fil: any) => fil.schemaId == data.mutualFundsId
              );

              let obj = { ...data, funds: { ...allfundData[index] } };
              return obj;
            });
            console.log('portfolio: ', this.portfolio);
          });

          console.log('unit=' + this.portfolio.unit);
        });
      });
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  getFundDetails(id: any) {
    this.apiService.detailById(id).subscribe((res) => {
      return res;
    });
  }
  sellMethod(fundId: number, price: number, unit: number) {
    this.http
      .post(
        `http://34.234.150.41:5151/transactionhistory/insert?username=${this.getCurrentUser()}&mutualFundsId=${fundId}&type=sell&price=${price}&unit=${unit}`,
        {}
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
