import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../controller/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signInForm;

  constructor(private fb: FormBuilder, private userService: UserService) { }
  get email(){
    return this.signInForm.get('email');
  }
  get password(){
    return this.signInForm.get('password');
  }
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }
  public signIn(){
    this.userService.signIn(this.signInForm.value);
  }


}
