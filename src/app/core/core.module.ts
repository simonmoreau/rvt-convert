import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';

import { MSALInterceptorConfigFactory, MSALGuardConfigFactory, MSALInstanceFactory } from './authentication/b2c-config';
import { LoginFailedComponent } from './pages/login-failed/login-failed.component';
import { WithLoadingPipe } from './pipes/with-loading.pipe';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginFailedComponent, WithLoadingPipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports:[ HomeComponent, HeaderComponent, FooterComponent, WithLoadingPipe],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ]
})
export class CoreModule { }
