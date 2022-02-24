import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AppModule } from '../app.module';
import { SignupComponent } from './signup/signup.component';
import { FirstComponent } from './first/first.component';
import { ExamComponent } from './exam/exam.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FirstComponent,
    ExamComponent,
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    FirstComponent
    
  ]
})
export class M1Module { }
