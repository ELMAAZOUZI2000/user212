import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './user-inscription/signup/signup.component';
import {SigninComponent} from './user-inscription/signin/signin.component';
import {UserInscriptionComponent} from './user-inscription/user-inscription.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './user-inscription/home/home.component';
import {AuthGuard} from './auth/auth.guard';
import { ResetPageComponent } from './user-inscription/reset-page/reset-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: SigninComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'reset-page', component:ResetPageComponent },
  {path: '**', redirectTo: 'signIn'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [SignupComponent, SigninComponent];
