import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendingComponent } from './vending/vending.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'vending', component: VendingComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'vending', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
