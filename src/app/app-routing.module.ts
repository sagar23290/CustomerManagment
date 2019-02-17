import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './Pages/customer-details/customer-details.component'
const routes: Routes = [
  {path:'', redirectTo : 'customer', pathMatch:'full' },
  {path:'customer', component : CustomerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
