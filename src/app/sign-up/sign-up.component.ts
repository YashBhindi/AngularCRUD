import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { furbiddenNameValidator} from '../shared/nameValidators'
import { passwordValidator } from '../shared/passwordValidators';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(private fb : FormBuilder) { }
  submitted = false;
  postions=["student","employee"];
  
  
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName : ['' , [Validators.required , furbiddenNameValidator(/ /)]],
      lastName : ['' , [Validators.required , furbiddenNameValidator(/ /)]],
      gender : ['' , Validators.required],
      postion : ['' , Validators.required],
      mobile : ['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
      emailId : [''],
      password : ['',Validators.required],
      confirmPwd : ['' , Validators.required],
      address : this.fb.group({
        cityName : ['' ],
        pinCode : ['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]]
      }),
      subscribe : [false],
      alternativeMobile : this.fb.array([])
    },{validators : passwordValidator});
    
    this.registrationForm.get('subscribe').valueChanges
      .subscribe( checkedValue => {
        const email = this.registrationForm.get('emailId');
        if(checkedValue){
          console.log("if")
          email.setValidators([Validators.required , Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')]);
        //  email.setValidators ();
          
        }  
        else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      })

  }

  get f() { return this.registrationForm; }
  
  get alternativeMo(){
    return this.registrationForm.get('alternativeMobile') as FormArray;
  }

  addAlternativeMobile(){
    this.alternativeMo.push(this.fb.control(''))
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
  }
  
  
  /** 
  get getFirstName(){
    return this.registrationForm.get('firstName');
  }
  get getLastName(){
    return this.registrationForm.get('lastName');
  }
  get getGender(){
    return this.registrationForm.get('gender');
  }
  get getPosition(){
    return this.registrationForm.get('position');
  }
  get getMobileNo(){
    return this.registrationForm.get('mobile');
  }
  get getEmail(){
    return this.registrationForm.get('emailId');
  }
  get getPassword(){
    return this.registrationForm.get('password');
  }
  get getConfirmPwd(){
    return this.registrationForm.get('confirmPwd');
  }
  get getCityName(){
    return this.registrationForm.get('cityName');
  }
  get getPinCode(){
    return this.registrationForm.get('pinCode');
  }
  */
}