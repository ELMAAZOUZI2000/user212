import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './inscription/signup/signup.component';
import {SigninComponent} from './inscription/signin/signin.component';

const routes: Routes = [
  {path: 'signUp', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [SignupComponent, SigninComponent];
