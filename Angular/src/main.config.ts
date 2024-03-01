import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

import { routes } from './routes';
import { provideClientHydration } from '@angular/platform-browser';


export const MainConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration()]
};
  