import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent {
  otpForm!: FormGroup;
  otp: boolean = false;
  sentSuccess: boolean = true;
  // email=''
  submitted:boolean=false;
  forgotForm!: FormGroup;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private loginservice: LoginService
  ) {}

  ngOnInit() {
    this.forgotForm = this.formbuilder.group({
      email: ['', Validators.required],
    });
    // this.otpForm = this.formbuilder.group({
    //   email:['',Validators.required],
    //   otp:['',Validators.required]

    // })
    // const data = this.otpForm.value

    // this.loginservice.sentEmail(data.email)
  }
  senOtp() {
    this.submitted = true;
    const data = this.forgotForm.value;
    const userName = data.email;
    console.log(data);
    this.loginservice.sentEmail(userName).subscribe((res: any) => {
      console.log(res);

    });

    // this.otp = true;
    // if(this.otpForm.invalid){
    //   return;
    // }
    // const email = this.otpForm.value
    this.router.navigate(['/update', userName]);
  }

  // showUpdate() {

  // }

  get form() {
    return this.otpForm.controls;
  }
}
