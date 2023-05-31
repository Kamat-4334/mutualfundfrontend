import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';
import { WalletService } from 'src/app/services/wallet.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio:any=[]
  userId:Number|any
  options: AnimationOptions = {
    path: '../../../assets/142582-money-growth.json',
  };
  constructor(private apiService:ApiService,private loginservice:LoginService,private walletservice:WalletService){

  }
  getCurrentUser() {
    return this.loginservice.getLoggedInUser();
  }
  ngOnInit(){
    this.walletservice.finduserid(this.getCurrentUser()).subscribe((response:any)=>{
      console.log(response)
      this.userId =response
      console.log(this.userId)

      this.apiService.getPortfolio(this.userId).subscribe((res:any)=>{
        console.log(res)
        this.portfolio = res;
        // console.log("unit="+ this.portfolio.unit)

      })
    })



    // let userid ='-1'
    // this.loginservice.getUserId(this.loginservice.getLoggedInUser()).subscribe((data)=>{
    //   console.log(data)
    // userid=data
    // })

    // this.apiService.getPortfolio(Number(userid)).subscribe((data)=>{
    //   console.log(data)
    //   this.portfolio=data
    // })

  //  this.apiService.getPortfolio(this.userId)
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}
