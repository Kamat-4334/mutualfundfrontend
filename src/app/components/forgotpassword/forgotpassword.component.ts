import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  otpForm!:FormGroup;
  otp:boolean=false;
  sentSuccess:boolean=true;
  email=''
  constructor(private router:Router,private formbuilder:FormBuilder,private loginservice:LoginService){}

  ngOnInit(){
    // this.otpForm = this.formbuilder.group({
    //   email:['',Validators.required],
    //   otp:['',Validators.required]

    // })
    // const data = this.otpForm.value


    // this.loginservice.sentEmail(data.email)
  }


  showUpdate(){
    this.router.navigate(['/update'])
  }

  // get form(){
  //   return this.otpForm.controls;

  // }

  senOtp(){
    this.loginservice.sentEmail(this.email).subscribe((res:any)=>{
      console.log(res)

    })


    // this.otp = true;
    // if(this.otpForm.invalid){
    //   return;
    // }
    // const email = this.otpForm.value




  }


}
