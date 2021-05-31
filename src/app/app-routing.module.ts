import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './core/pages/home/home.component';
import { PricingComponent } from './payment/pages/pricing/pricing.component'
import { ConversionComponent } from './conversion/pages/conversion/conversion.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: PricingComponent
  },
  {
    path: 'conversion',
    component: ConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
