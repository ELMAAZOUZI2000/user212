import { Component, OnInit } from '@angular/core';
import {UserService} from '../../controller/service/user.service';
import {Router} from '@angular/router';
import {Product} from '../../controller/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProducts();
  }

  public logout(){
    localStorage.removeItem('myFirstToken');
    localStorage.removeItem('expiredAt');
    this.router.navigate(['/signIn']);
  }

  public products(): Array<Product>{
    return this.userService.products;
  }

  public reset(){
    this.router.navigate(['/reset-page']);
  }
}
