import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './m1/exam/exam.component';
import { FirstComponent } from './m1/first/first.component';
import { LoginComponent } from './m1/login/login.component';
import { SignupComponent } from './m1/signup/signup.component';

const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:FirstComponent},
  {path:'exam',component:ExamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[LoginComponent,SignupComponent]
