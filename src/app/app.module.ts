import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './user-inscription/signup/signup.component';
import { SigninComponent } from './user-inscription/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule, routingComponents} from './app-routing';
import { UserInscriptionComponent } from './user-inscription/user-inscription.component';
import {User} from './controller/model/user.model';
import { HomeComponent } from './user-inscription/home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {UserService} from './controller/service/user.service';
import { ResetPageComponent } from './user-inscription/reset-page/reset-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    UserInscriptionComponent,
    HomeComponent,
    ResetPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [UserInscriptionComponent]
})
export class AppModule { }
