import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  ENVIRONMENT_INITIALIZER,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { EntityDataService, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appRoutes } from './app/app.routes';
import { PostDataService } from './app/model/entities/post-data.service';
import { angular16EntityConfig } from './app/model/entity';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25 }),
    provideEntityData(angular16EntityConfig, withEffects()),
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
