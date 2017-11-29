import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { maxLength, Validator, FormValidator, maxAge, maxLength1} from '../validator';
import { FormBuilder } from '@angular/forms';
export interface ValidatorFn { (c: AbstractControl): ValidationErrors | null; }


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formObj=new FormValidator();


  constructor() { }

  loginForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }



  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validator(/^[a-zA-Z0-9]+$/), maxLength()]),
      passwrd: new FormControl('', [Validators.required, Validator(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,8})/), maxLength1(), this.formObj.passWord()]),
      confirmpasswd: new FormControl('', [Validators.required, this.formObj.checkPassWord()]),
      email: new FormControl('', [Validators.required, Validator(/(\w+)\@(\w+)\.[a-zA-Z]/g)]),
      dob: new FormControl('',[Validators.required, maxAge()]),
      time1:new FormControl('',[Validators.required,this.formObj.checkStartTime(),this.formObj.checkInvalidDateFormat1()]),
      time2:new FormControl('',[Validators.required,this.formObj.checkEndTime(),this.formObj.checkInvalidDateFormat2()])

    })
  }

  //   username= new FormControl('', [Validators.required, Validator(/^[a-zA-Z0-9]+$/), maxLength()]);
  // password= new FormControl('', [Validators.required,Validator(/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})/),maxLength()]);
  //  confirmpasswd=new FormControl('',Validators.required);
  // email=new FormControl('',[Validators.required,Validator(/(\w+)\@(\w+)\.[a-zA-Z]/g)]);
  // dob=new FormControl('',maxAge())

  //   constructor(public fb:FormBuilder) {}



  //   loginForm: FormGroup;

  //     ngOnInit() {
  //       this.createForm();
  //     }

  //     createForm() {
  //       this.loginForm = this.fb.group({
  //         username: this.username,
  //         password: this.password,
  //         confirmpasswd:this.confirmpasswd,
  //         email:this.email,
  //         dob:this.dob,

  //       }, {validator: this.matchingPasswords()});

  // }


 
}
