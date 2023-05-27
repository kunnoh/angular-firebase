import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'verify', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
