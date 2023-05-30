import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { TransactionPageComponent } from '../../transaction/transaction-page/transaction-page.component';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.css']
})
export class DepositPageComponent {

@Output() balance= new EventEmitter<any>()
  moneyToWallet:any[]=[]
  add_balance:number | any;
  username:any
  userId:any
  constructor(private api:WalletService,private apii:ApiService,private sharedservice:SharedService,private loginservice:LoginService){}
  getCurrentUser() {
    return this.loginservice.getLoggedInUser();}
  ngOnInit() {
    // this.sharedservice.username$.subscribe(username=>{
    //   this.username=username
    //   console.log(this.username)

    //   })
    //   this.userId=this.api.finduserid(this.username)

    // this.api.addMoney(1,this.add_balance).subscribe((res:any)=>{
    //   this.moneyToWallet = res;
    //   console.log(this.moneyToWallet);

    // })
    // console.log(this.add_balance)
    this.api.finduserid(this.getCurrentUser()).subscribe((response:any)=>{
      console.log(response)
      this.userId =response
      console.log(this.userId)
    })

  }
  addMoneyToWallet(){
    this.api.addMoney(this.userId,this.add_balance).subscribe((res:any)=>{
      alert(res);
this.balance.emit(res)
      // window.location.reload();
    })

  }
  transactionHistory(){
    this.api.addTransactionHistory(this.userId,1,this.add_balance).
    subscribe((res=>{
      // console.log(this.transaction)
      // alert(res);
    }))
  }


}
