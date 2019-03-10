import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './Pages/customer-details/customer-details.component'
import { SignupComponent } from './Pages/signup/signup.component'
import { LoginComponent } from './Pages/login/login.component'
const routes: Routes = [
  {path:'', redirectTo : 'login', pathMatch:'full' },
  {path:'login', component : LoginComponent },
  {path:'Signup', component : SignupComponent },
  {path: 'customer' , component: CustomerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
