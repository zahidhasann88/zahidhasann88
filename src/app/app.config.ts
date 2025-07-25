import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withInMemoryScrolling,
} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    provideClientHydration(),
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule),
  ],
};
