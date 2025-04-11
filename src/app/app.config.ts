import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as icons from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';



import { routes } from './app.routes';
import { provideHlmIconConfig } from '@spartan-ng/ui-icon-helm';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideIcons(icons)
  ]
};
