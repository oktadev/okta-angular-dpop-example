import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      OktaAuthModule.forRoot({oktaAuth: new OktaAuth({
        issuer: 'https://{yourOktaDomain}',
        clientId: '{yourClientID}',
        redirectUri: `${window.location.origin}/login/callback`,
        scopes: ['openid', 'profile', 'offline_access', 'okta.users.read', 'okta.apps.read'],
        dpop: false
      })})
    ),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    )
  ]
};
