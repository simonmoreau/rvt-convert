import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MsalGuard } from '@azure/msal-angular';

import { HomeComponent } from './core/pages/home/home.component';
import { PricingComponent } from './payment/pages/pricing/pricing.component';
import { ConversionComponent } from './conversion/pages/conversion/conversion.component';
import { LoginFailedComponent } from './core/pages/login-failed/login-failed.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login-failed',
    component: LoginFailedComponent
  },
  {
    path: 'checkout',
    component: PricingComponent
  },
  {
    path: 'conversion',
    component: ConversionComponent,
    canActivate: [MsalGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
