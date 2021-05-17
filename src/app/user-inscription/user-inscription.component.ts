import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../controller/service/user.service';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit(): void {

  }
  public SignUp(){
    this.router.navigate(['/signUp']);
  }

  public SignIn(){
    this.router.navigate(['/signIn']);
  }
}
