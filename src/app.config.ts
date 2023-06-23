import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { EntityDataService } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { appRoutes } from './app/app.routes';
import { PostDataService } from './app/model/entities/post-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    PostDataService,
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue() {
        const entityDataService = inject(EntityDataService);
        const postDataService = inject(PostDataService);
        entityDataService.registerService('Post', postDataService);
      },
      multi: true,
    },
  ],
};
