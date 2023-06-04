import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

import { UpdatePassword } from 'src/app/classes/update-password';


@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent {
  // password:any
  // confirmPassword:any
  passwordForm!:FormGroup
  email:any;
  submitted:boolean= false;
  constructor(private router:Router,private formbuilder:FormBuilder,private loginService:LoginService,private route:ActivatedRoute){}

  ngOnInit(){

    this.email = this.route.snapshot.paramMap.get('email')
    this.passwordForm = this.formbuilder.group({
      otp:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],

  })
  }

  updateNewPassword(){
    this.submitted = true;
    const data = this.passwordForm.value;
    const otp = data.otp
    const user1 = new UpdatePassword(
      this.email,
      data.password

    );
    console.log(user1)
    this.loginService.updatepassword(otp,user1).subscribe((res:any)=>{
      console.log(res)
    })
  }
  get form() {
    return this.passwordForm.controls;
  }
  showUpdate(){
    this.router.navigate(['/update'])
  }

}
