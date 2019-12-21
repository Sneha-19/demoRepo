import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(public router:Router) { 
    this.loginForm=new FormGroup({
      'email': new FormControl(''),
      'pass' : new FormControl('')
    });
  }
 
  ngOnInit() {
  }
  mailId:any;
  passWord:any;
  getFormData()
  {
    this.mailId=this.loginForm.value.email;
    alert(this.mailId);
    this.passWord=this.loginForm.value.pass;
  }
}
