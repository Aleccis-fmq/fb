import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


//Http Client StandAlone

import {provideHttpClient} from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  
  //MAIN.TS
  providers: [provideRouter(routes), provideAnimations(),provideHttpClient()]
};
