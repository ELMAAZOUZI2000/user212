import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../controller/service/user.service';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signInForm;
  private isLoggedIn = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  get username(){
    return this.signInForm.get('username');
  }
  get password(){
    return this.signInForm.get('password');
  }
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }
  public signIn(){
    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;
    this.userService.signIn(username,password).subscribe(
      data => {
          let decodedToken = jwt_decode(data['token']);
          const expiredAt = Math.floor( Date.now()/1000 + (decodedToken['exp'] - Date.now()/1000) );
          localStorage.setItem('myFirstToken', data['token']);
          localStorage.setItem('expiredAt', JSON.stringify(expiredAt));
          this.isLoggedIn = true;

          this.router.navigate(['/home']);
      },
      error =>{
        this.isLoggedIn = false;
        alert('Your Identifiers are incorrect !!');
      }
    ) ;;
    this.signInForm.reset();
  }


}
