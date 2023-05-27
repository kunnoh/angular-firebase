import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/components/sign-in/sign-in.component';
import { SignUpComponent } from './components/components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/components/verify-email/verify-email.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
