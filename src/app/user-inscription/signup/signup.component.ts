import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../controller/service/user.service';
import {User} from '../../controller/model/user.model';
import {PasswordValidotor} from '../shared/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registrationForm: FormGroup;
  public isCreated = false;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  get username(){
    return this.registrationForm.get('userName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:  ['', [Validators.required]]
    }, {validator: PasswordValidotor});
  }



   public signUp(){

     this.userService.signUp(this.registrationForm).subscribe(
       data => {
         this.isCreated = true;
       }, error => {
        });
     this.registrationForm.reset();

   }

   get user(): User{
    return this.user;
   }
}
