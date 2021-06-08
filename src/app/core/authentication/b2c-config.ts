import {
  IPublicClientApplication,
  PublicClientApplication,
  InteractionType,
  BrowserCacheLocation,
  LogLevel,
} from '@azure/msal-browser';
import {
  MsalGuard,
  MsalInterceptor,
  MsalBroadcastService,
  MsalInterceptorConfiguration,
  MsalModule,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalGuardConfiguration,
  MsalRedirectComponent,
} from '@azure/msal-angular';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_sign_up_and_sign_in',
    editProfile: 'B2C_1_edit_profile_v2',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://rvtconvert.b2clogin.com/rvtconvert.onmicrosoft.com/B2C_1_sign_up_and_sign_in',
    },
    editProfile: {
      authority:
        'https://rvtconvert.b2clogin.com/rvtconvert.onmicrosoft.com/B2C_1_edit_profile_v2',
    },
  },
  authorityDomain: 'rvtconvert.b2clogin.com',
};

export function loggerCallback(logLevel: LogLevel, message: string): void {
  console.log(message);
}

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'beea9d5c-29bb-49b7-b7b9-f647b90a74d8',
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      redirectUri: '/',
      postLogoutRedirectUri: '/',
      knownAuthorities: [b2cPolicies.authorityDomain],
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false,
      },
    },
  });
}

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
  scopes: ['https://rvtconvert.onmicrosoft.com/helloapi/demo.read'],
  uri: 'https://rvtconvert.azurewebsites.net/hello',
};

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  // const protectedResourceMap = new Map<string, Array<string>>();
  // protectedResourceMap.set(apiConfig.uri, apiConfig.scopes);

  const protectedResourceMap = new Map<string, Array<string> | null>([
    ['https://graph.microsoft.com/v1.0/me', ['user.read', 'profile']],
    ['/api/', ['custom.scope']]
]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    // MSAL Guard Configuration
    interactionType: InteractionType.Redirect,
    // authRequest: {
    //   scopes: ['user.read'],
    // },
    loginFailedRoute: '/login-failed',
  };
}
