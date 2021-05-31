import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pages/pricing/pricing.component';



@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PricingComponent]
})
export class PaymentModule { }
