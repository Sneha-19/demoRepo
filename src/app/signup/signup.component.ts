import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(public router:Router) {
    this.signupForm=new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'password' : new FormControl(''),
      'mob' : new FormControl(''),
      'gender' : new FormControl(''),
      'birthdate' : new FormControl('')
    })
   }

  ngOnInit() {
  }

  onsignup(){
    alert("Your name is "+this.signupForm.value.name);
    alert("Your birth date is "+this.signupForm.value.birthdate);
    this.router.navigate(['login']);
  }

}
